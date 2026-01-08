import React from "react";

const InputSelect = ({ label, value, setValue, options }) => {
  return (
    <>
      <div className="mb-3">
        <label className="form-label">{label}</label>
        <select
          name=""
          className="form-select mb-3"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id=""
        >
          {options?.map((opt, i) => (
            <option value={opt} key={i}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default InputSelect;
