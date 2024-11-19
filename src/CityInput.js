import React, { useState } from 'react';
import InputWithLabels from './components/InputWithLabel';
import CustomButton from './components/CustomButton';
import { Tooltip } from '@mui/material';

const CityInput = ({ setCity }) => {
  const [search, setSearch] = useState('');
  return (
    <div style={{ display: 'flex', width: '100vw', justifyContent: 'center' }}>
      <div style={{ width: '50vw' }}>
        <InputWithLabels
          value={search}
          setValue={setSearch}
          label="City Name"
          type="text"
          placeholder="Enter the City Name"
        />
        <Tooltip
          title={
            search === ''
              ? 'Type a city name to search'
              : `Find weather for ${search} now`
          }
        >
          <div>
            <CustomButton
              label="Find"
              additionalStyle={{ marginTop: '30px' }}
              disabled={search === ''}
              onClick={() => {
                setCity(search);
              }}
            />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default CityInput;
