import React from 'react';

class NearestAirportFinder extends React.Component {
  state = {
    nearestAirport: null,
    error: null
  };

  // List of airports with their coordinates
  airports = [
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

  // Function to calculate distance between two points using Haversine formula
  calculateDistance = (lat1, lon1, lat2, lon2) => {
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
  findNearestAirport = () => {
    const { setnearest } = this.props;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;

        // Calculate distances to each airport
        const distances = this.airports.map(airport => ({
          name: airport.name,
          distance: this.calculateDistance(userLat, userLon, airport.lat, airport.lon)
        }));

        // Find the nearest airport
        const nearestAirport = distances.reduce((nearest, current) => {
          return nearest.distance < current.distance ? nearest : current;
        });
        setnearest(nearestAirport)

        this.setState({ nearestAirport: nearestAirport.name, error: null });
      }, error => {
        this.setState({ error: "Error getting geolocation: " + error.message });
      });
    } else {
      this.setState({ error: "Geolocation is not supported by this browser." });
    }
  }

  render() {
    const { nearestAirport, error } = this.state;

    return (
      <button className='flex justify-center items-center'>
        <span className="location-container"><svg class="seo-pages-0" data-testid="IconLocationCurrentFilled24" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.18 3.15 3.64 8.82c-1.2.44-1.13 2.16.11 2.5l7.03 1.92 1.89 7.08c.33 1.24 2.06 1.31 2.5.11l5.67-15.62c.38-1.03-.63-2.04-1.66-1.66Z" fill="#121214"></path></svg></span>
        <div onClick={this.findNearestAirport}>Nearby</div>
      </button>
    );
  }
}

export default NearestAirportFinder;
