import React from "react";
import { productNameList } from "../utils/Contants";

const Input = ({ label, name, onChange, id, type }) => {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event);
  };

  return (
    <>
    <div className="col-12">
                <label className="order-form-label">{productNameList[id]}</label>
              </div>
      <input
        type={type || "text"}
        className="form-control order-form-input"
        id={id}
        name={name}
        placeholder={label}
        onChange={handleChange}
        value={value}
        // min={0}
      />
      {/* <label className="form-label" htmlFor={id}>
        {label}
      </label> */}
    </>
  );
};

export default Input;
