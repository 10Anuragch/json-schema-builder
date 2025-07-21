import React from "react";

const buildSchema = (fields) => {
  const schema = {};
  fields.forEach((field) => {
    if (field.type === "nested") {
      schema[field.name] = buildSchema(field.children || []);
    } else {
      schema[field.name] = field.type.toUpperCase();
    }
  });
  return schema;
};

const SchemaOutput = ({ fields }) => {
  const schema = buildSchema(fields);

  return (
    <div className="bg-gray-100 rounded p-4 ml-6 mt-4 text-sm">
      <pre>{JSON.stringify(schema, null, 2)}</pre>
    </div>
  );
};

export default SchemaOutput;
