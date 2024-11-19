import React, { useState } from 'react';
import InputWithLabels from './components/InputWithLabel';
import CustomButton from './components/CustomButton';

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
        <CustomButton
          label="Find"
          additionalStyle={{ marginTop: '30px' }}
          disabled={search === ''}
          onClick={() => {
            setCity(search);
          }}
        />
      </div>
    </div>
  );
};

export default CityInput;
