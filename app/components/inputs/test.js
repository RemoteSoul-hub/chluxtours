import React, { useEffect, useState } from 'react';

interface LocationInputComponentProps {
  googleMapsApiKey: string;
  onLocationSelect: (selectedLocation: string) => void;
}

const LocationInputComponent: React.FC<LocationInputComponentProps> = ({ googleMapsApiKey, onLocationSelect }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const CONFIGURATION = {
      ctaTitle: "Checkout",
      mapOptions: {
        center: { lat: 37.4221, lng: -122.0841 },
        fullscreenControl: true,
        mapTypeControl: false,
        streetViewControl: true,
        zoom: 10,
        zoomControl: true,
        maxZoom: 22,
        mapId: "",
      },
      mapsApiKey: googleMapsApiKey,
      capabilities: {
        addressAutocompleteControl: true,
        mapDisplayControl: false,
        ctaControl: false,
      },
    };

    const componentForm = [
      'location',
      'locality',
      'administrative_area_level_1',
      'country',
      'postal_code',
    ];

    const getFormInputElement = (component: string) => document.getElementById(component + '-input');
    const autocompleteInput = getFormInputElement('location');
    const autocomplete = new window.google.maps.places.Autocomplete(autocompleteInput, {
      fields: ["address_components", "geometry", "name"],
      types: ["address"],
    });

    autocomplete.addListener('place_changed', function () {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert('No details available for input: \'' + place.name + '\'');
        return;
      }
      onLocationSelect(place.name);
      setInputValue(place.name);
      setSuggestions([]);
    });

    autocompleteInput.addEventListener('input', function () {
      const input = this as HTMLInputElement;
      setInputValue(input.value);
      if (input.value === '') {
        setSuggestions([]);
        return;
      }
      const service = new window.google.maps.places.AutocompleteService();
      service.getPlacePredictions(
        {
          input: input.value,
          componentRestrictions: { country: 'us' }, // Modify this as needed
        },
        (predictions, status) => {
          if (status === 'OK' && predictions) {
            const suggestionList = predictions.map((prediction) => prediction.description);
            setSuggestions(suggestionList);
          } else {
            setSuggestions([]);
          }
        }
      );
    });
  }, [googleMapsApiKey, onLocationSelect]);

  return (
    <div>
      <input
        type="text"
        id="location-input"
        placeholder="Enter a location"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => setInputValue(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationInputComponent;
