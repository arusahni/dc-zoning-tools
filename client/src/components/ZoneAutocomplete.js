import React, { useState } from 'react';
import Select, { components } from 'react-select';

const ZoneAutocomplete = ({ zoneLabels, onZoneChange }) => {
  console.log('ZoneAutocomplete rendering');

  const options = zoneLabels.map((label) => ({ value: label, label }));
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleChange = (selectedOption) => {
    console.log('Zone changed:', selectedOption?.value || '');
    onZoneChange(selectedOption?.value || '');
    setMenuIsOpen(false);
  };

  const ClearIndicator = (props) => {
    const {
      children = '✖',
      innerProps: { ref, ...restInnerProps },
    } = props;
    return (
      <components.ClearIndicator {...props}>
        <div {...restInnerProps} ref={ref}>
          {children}
        </div>
      </components.ClearIndicator>
    );
  };

  return (
    <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 1000, width: '250px' }}>
      <Select
        placeholder="Select a zoning label..."
        options={options}
        onChange={handleChange}
        onFocus={() => {
          console.log('Select onFocus');
          setMenuIsOpen(true);
        }}
        onBlur={() => {
          console.log('Select onBlur');
          setTimeout(() => setMenuIsOpen(false), 200);
        }}
        menuIsOpen={menuIsOpen}
        isClearable
        components={{ ClearIndicator }}
      />
    </div>
  );
};

export default ZoneAutocomplete;
