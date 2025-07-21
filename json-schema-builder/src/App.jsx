import React, { useState } from "react";
import FieldRenderer from "./components/FieldRenderer";
import SchemaOutput from "./components/SchemaOutput";

const App = () => {
  const [fields, setFields] = useState([]);

  const handleSubmit = () => {
    alert("Schema submitted! Check the right panel.");
  };

  return (
    <div className="p-8 flex">
      <div className="w-2/3">
        <FieldRenderer fields={fields} onChange={setFields} />
        <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-white text-black border border-black rounded">
          Submit
        </button>

      </div>
      <div className="w-1/2">
        <SchemaOutput fields={fields} />
      </div>
    </div>
  );
};

export default App;
