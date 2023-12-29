import React, { useState } from 'react';

const SchemaDropdown = ({ onAddSchema, selectedSchemas }) => {
  const schemaOptions = [
    { label: 'First Name', value: 'first_name' },
    { label: 'Last Name', value: 'last_name' },
    { label: 'Gender', value: 'gender' },
    { label: 'Age', value: 'age' },
    { label: 'Account Name', value: 'account_name' },
    { label: 'City', value: 'city' },
    { label: 'State', value: 'state' },
  ];

  const [selectedOption, setSelectedOption] = useState('');

  const handleAddSchema = () => {
    if (selectedOption && !selectedSchemas.find((schema) => schema.value === selectedOption)) {
      onAddSchema({ [selectedOption]: schemaOptions.find((schema) => schema.value === selectedOption).label });
      setSelectedOption('');
    }
  };

  return (
    <div className="schema-dropdown">
      <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="">Select Schema</option>
        {schemaOptions.map((schema) => (
          <option key={schema.value} value={schema.value}>
            {schema.label}
          </option>
        ))}
      </select>
      <button onClick={handleAddSchema}>+Add new schema</button>
    </div>
  );
};

export default SchemaDropdown;
