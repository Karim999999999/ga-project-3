import React from 'react';

function DropDownField({ label, value, options, onChange }) {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.label} Value={option.value}>
            {' '}
            {option.label}{' '}
          </option>
        ))}
      </select>
    </label>
  );
}

export default DropDownField;
