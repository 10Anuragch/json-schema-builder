import React from "react";
import { Input, Select, Switch } from "antd";
import FieldRenderer from "./FieldRenderer";

const typeOptions = ["string", "number", "boolean", "nested"];

const FieldRow = ({ field, onChange, onRemove }) => {
  const handleChange = (key, value) => {
    const updated = { ...field, [key]: value };
    if (key === "type" && value !== "nested") {
      updated.children = [];
    }
    onChange(updated);
  };

  return (
    <div className="flex flex-col space-y-2 ">
      <div className="flex gap-2 items-center">
        <Input
          placeholder="Field name"
          value={field.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <Select
          placeholder="Field Type"
          value={field.type}
          options={typeOptions.map(t => ({ value: t, label: t }))}
          onChange={(value) => handleChange("type", value)}
          style={{ width: 120 }}
        />
        <Switch
          checked={field.required}
          onChange={(checked) => handleChange("required", checked)}
        />
        <button onClick={onRemove} className="text-red-600 text-xl">✖</button>
      </div>
      {field.type === "nested" && (
        <FieldRenderer
          fields={field.children || []}
          onChange={(children) => handleChange("children", children)}
        />
      )}
    </div>
  );
};

export default FieldRow;
