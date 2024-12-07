import React, { useState } from 'react';
import axios from 'axios';

const DistanceCalculator = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [distance, setDistance] = useState(null);
  const [cost, setCost] = useState(null);
  const pricePerKm = 30; // Default price per km in Rs

  const handleCalculate = async (e) => {
    e.preventDefault();

    try {
      const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your actual API key
      const response = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json`, {
        params: {
          origins: from,
          destinations: to,
          key: apiKey
        }
      });

      if (response.data.rows[0].elements[0].status === 'OK') {
        const distanceInMeters = response.data.rows[0].elements[0].distance.value;
        const distanceInKm = distanceInMeters / 1000;
        const calculatedCost = distanceInKm * pricePerKm;

        setDistance(distanceInKm);
        setCost(calculatedCost);
      } else {
        alert('Unable to fetch distance. Please check the locations and try again.');
      }
    } catch (error) {
      console.error('Error fetching distance from Google Maps:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleCalculate}>
        <div>
          <label>
            From:
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            To:
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Calculate</button>
      </form>

      {distance !== null && cost !== null && (
        <div>
          <p>Distance: {distance.toFixed(2)} km</p>
          <p>Cost: ₹{cost.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default DistanceCalculator;
