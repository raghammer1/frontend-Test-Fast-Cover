import React from 'react';
import { styled } from '@mui/system';

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  margin: '20px auto',
  maxWidth: '600px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Arial, sans-serif',
});

const Section = styled('div')({
  marginBottom: '20px',
  width: '100%',
});

const Title = styled('h2')({
  margin: '0 0 10px',
  color: '#333',
  fontSize: '24px',
  textAlign: 'center',
});

const SubTitle = styled('h3')({
  margin: '0 0 5px',
  color: '#555',
  fontSize: '18px',
  textTransform: 'uppercase',
  borderBottom: '1px solid #ccc',
  paddingBottom: '5px',
});

const Text = styled('p')({
  margin: '5px 0',
  fontSize: '16px',
  color: '#666',
});

const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return (
      <p style={{ textAlign: 'center' }}>
        Enter a city to see the weather data.
      </p>
    );
  }

  const {
    name,
    sys: { country, sunrise, sunset },
    main: { temp, feels_like, temp_min, temp_max },
    weather: [{ description }],
    wind: { speed, deg },
    visibility,
    clouds: { all: cloudiness },
  } = weather;

  const getTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  console.log(weather, 'FROM URTHUEHRUERUEHrHUHUEHRUHE');
  return (
    <div>
      <Wrapper>
        <Title>
          {name}, {country}
        </Title>
        <Text>
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </Text>

        <Section>
          <SubTitle>Temperature</SubTitle>
          <Text>Current: {temp} K</Text>
          <Text>Feels Like: {feels_like} K</Text>
          <Text>Min: {temp_min} K</Text>
          <Text>Max: {temp_max} K</Text>
        </Section>

        <Section>
          <SubTitle>Wind</SubTitle>
          <Text>Speed: {speed} m/s</Text>
          <Text>Direction: {deg}°</Text>
        </Section>

        <Section>
          <SubTitle>Additional Info</SubTitle>
          <Text>Visibility: {visibility / 1000} km</Text>
          <Text>Cloudiness: {cloudiness}%</Text>
          <Text>Sunrise: {getTime(sunrise)}</Text>
          <Text>Sunset: {getTime(sunset)}</Text>
        </Section>
      </Wrapper>
    </div>
  );
};

export default WeatherDisplay;
