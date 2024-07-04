import React from "react";
import Input from "./Input";

const Form = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    dropdownValue: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
       {/* <div className="form-group">
        <label htmlFor="dropdown">Dropdown</label>
        <select
          className="form-control"
          id="dropdown"
          name="dropdownValue"
          value={formData.dropdownValue}
          onChange={handleInputChange}
        >
          <option value="">Select an option</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div> */}
      <div className="form-group">
        <div className="row">
          <div className="col">

            <Input label="5 inc"/>
          </div>
          <div className="col">
          <Input label="9 inc"/>
          </div>
          <div className="col">
          <Input label="Ballon Half"/>
          </div>
          <div className="col">
          <Input label="Full Sleeve"/>
          </div>
          <div className="col">
          <Input label="Metalic"/>
          </div>
          <div className="col">
          <Input label="Platting"/>
          </div>
          <div className="col">
          <Input label="Frill"/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Client Info</label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="3"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
