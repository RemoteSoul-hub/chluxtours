import { useEffect, useState } from "react";
import Autocomplete from "react-google-autocomplete";
import CountrySelect, { 
    CountrySelectValue
  } from "../inputs/CountrySelect";
const YourComponent = ( loc ) => {
  const [location, setLocation] = useState<CountrySelectValue | null>(null);

  useEffect(() => {
    // Load the Google Maps JavaScript API script dynamically
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    googleMapsScript.addEventListener("load", () => {
      // The Google Maps API script has loaded; you can now render the Autocomplete component
    });
    googleMapsScript.addEventListener("error", () => {
      // Handle errors here if the script fails to load
    });
    document.head.appendChild(googleMapsScript);
  }, []);

  const handleLocationChange = (newValue ) => {
    setLocation(newValue as CountrySelectValue);
  };

  return (
    <div>
      <Autocomplete
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        location={loc}
        style={{ width: "90%" }}
        renderOption={(place) => {
          return <div>
            <strong>{place.name}</strong>
            <p>{place.address}</p>
          </div>;
        }}
        onChange={handleLocationChange}
      />
      {/* Your other components */}
    </div>
  );
};

export default YourComponent;