'use client';
import useCountries from '@/app/hooks/useCountries';
import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Select from 'react-select';



export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[],
  region: string;
  value: string
}

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}
const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange,
}) => {
  const [address, setAddress] = useState('');

  const handleSelect = async (selectedAddress: string) => {
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);
      const selectedCountry = {
        flag: '', // You can fetch the flag based on the country code if needed
        label: selectedAddress,
        latlng: [latLng.lat, latLng.lng],
        region: '', // You can fetch the region if needed
        value: selectedAddress,
      };
      onChange(selectedCountry);
      setAddress(selectedAddress);
    } catch (error) {
      console.error('Error selecting country:', error);
    }
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={(newAddress) => setAddress(newAddress)}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Anywhere',
                className: 'text-lg p-3 border-2',
              })}
            />
            <div className="suggestions-container">
             {suggestions.map((suggestion) => (
              <div
                {...getSuggestionItemProps(suggestion)}
                 key={suggestion.id}
                 className="suggestion-item text-lg"
               >
              {suggestion.description}
            </div>
                      ))}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default CountrySelect;
