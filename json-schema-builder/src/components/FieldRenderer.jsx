import React from "react";
import FieldRow from "./FieldRow";

const FieldRenderer = ({ fields, onChange }) => {
  const updateField = (index, updatedField) => {
    const newFields = [...fields];
    newFields[index] = updatedField;
    onChange(newFields);
  };

  const addField = () => {
    onChange([...fields, { name: "", type: "", required: false, children: [] }]);
  };

  const removeField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    onChange(newFields);
  };

  return (
    <div className="space-y-2 ml-4 border-l-2 pl-4">
      {fields.map((field, index) => (
        <FieldRow
          key={index}
          field={field}
          onChange={(updatedField) => updateField(index, updatedField)}
          onRemove={() => removeField(index)}
        />
      ))}
      <button className="bg-blue-600 text-white px-4 py-1 rounded" onClick={addField}>
        + Add Item
      </button>
    </div>
  );
};

export default FieldRenderer;
