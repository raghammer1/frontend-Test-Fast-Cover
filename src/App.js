import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CityInput from './CityInput';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (city === '') return;
      setLoading(true);
      const url = `http://localhost:3001/api/weather/cityWeather?city=${city}`;
      try {
        const response = await axios.get(url);
        setWeather(response.data);
        setError(null);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch weather data.');
        setLoading(false);
      }
    };
    fetchData();
  }, [city]);

  return (
    <div>
      <CityInput setCity={setCity} />
      {loading ? (
        <p style={{ color: '#000', textAlign: 'center', marginTop: '20px' }}>
          Loading...
        </p>
      ) : error ? (
        <p style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>
          {error}
        </p>
      ) : (
        <WeatherDisplay weather={weather} />
      )}
    </div>
  );
}

export default App;
