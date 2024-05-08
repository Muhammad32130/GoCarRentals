import { useEffect, useState } from 'react'

function FindUser({setnearest}) {
  const [error, setError] = useState(null);

  // List of airports with their coordinates
  const airports = [
    { name: "George Bush Intercontinental Airport (IAH)", lat: 29.9931, lon: -95.3416 },
    { name: "Atlanta International Airport (ATL)", lat: 33.6407, lon: -84.4277 },
    { name: "Los Angeles International Airport (LAX)", lat: 33.9416, lon: -118.4085 },
    { name: "O'Hare International Airport (ORD)", lat: 41.9742, lon: -87.9073 },
    { name: "Fort Worth International Airport (DFW)", lat: 32.8998, lon: -97.0403 },
    { name: "John F. Kennedy International Airport (JFK)", lat: 40.6413, lon: -73.7781 },
    { name: "Denver International Airport (DEN)", lat: 39.8561, lon: -104.6737 },
    { name: "San Francisco International Airport (SFO)", lat: 37.6213, lon: -122.3790 },
    { name: "Miami International Airport (MIA)", lat: 25.7959, lon: -80.2870 },
    { name: "McCarran International Airport (LAS)", lat: 36.0840, lon: -115.1537 },
    { name: "Orlando International Airport (MCO)", lat: 28.4312, lon: -81.3081 }
  ];

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  }

  // Function to find the nearest airport
  const findNearestAirport = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;

        // Calculate distances to each airport
        const distances = airports.map(airport => ({
          name: airport.name,
          distance: calculateDistance(userLat, userLon, airport.lat, airport.lon)
        }));

        // Find the nearest airport
        const nearestAirport = distances.reduce((nearest, current) => {
          return nearest.distance < current.distance ? nearest : current;
        });
        
        setnearest(nearestAirport);
        setError(null);
      }, error => {
        setError("Error getting geolocation: " + error.message);
      });
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }

  useEffect(() => {
    findNearestAirport();
  }, []); 
}

export default FindUser
