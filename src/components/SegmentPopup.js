import React, { useState } from 'react';
import SchemaDropdown from './SchemaDropdown';

const SegmentPopup = ({ onSaveSegment }) => {
  const [segmentName, setSegmentName] = useState('');
  const [selectedSchemas, setSelectedSchemas] = useState([]);

  const handleAddSchema = (schema) => {
    setSelectedSchemas((prevSchemas) => [...prevSchemas, schema]);
  };

  const handleSaveSegment = () => {
    onSaveSegment({ segmentName, schema: selectedSchemas });
  };

  return (
    <div className="popup">
      <input
        type="text"
        placeholder="Segment Name"
        value={segmentName}
        onChange={(e) => setSegmentName(e.target.value)}
      />
      <SchemaDropdown onAddSchema={handleAddSchema} selectedSchemas={selectedSchemas} />
      <button onClick={handleSaveSegment}>Save Segment</button>
    </div>
  );
};

export default SegmentPopup;
