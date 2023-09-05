import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Configure your Google Maps API key as an environment variable
const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

interface MapProps {
  center?: number[];
}

const Map: React.FC<MapProps> = ({ center }) => {
  const [isGoogleMapsLoaded, setGoogleMapsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
    script.async = true;
    script.onload = () => setGoogleMapsLoaded(true);

    document.body.appendChild(script);

    return () => {
      // Clean up the script element when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {isGoogleMapsLoaded ? (
        <MapContainer
          center={center as L.LatLngExpression || [51, -0.09]}
          zoom={center ? 4 : 2}
          scrollWheelZoom={false}
          className="h-[35vh] rounded-lg"
        >
          <TileLayer url={url} attribution={attribution} />
          {center && <Marker position={center as L.LatLngExpression} />}
        </MapContainer>
      ) : (
        // You can display a loading indicator or message while the script is loading
        <div>Loading Google Maps...</div>
      )}
    </div>
  );
};

export default Map;
