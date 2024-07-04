import { productNameList, ClientDetails } from "../utils/Contants";
import React, { useRef, useState } from "react";
import Input from "./Input";
import { useReactToPrint } from "react-to-print";
import { Receipt } from "./Receipt";
import { FaPrint, FaTimes } from "react-icons/fa";

const FormOnen = () => {
  const [formData, setFormData] = useState({});
  const [showPrint, setShowPrint] = useState(false);

  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });

  const onClickHandler = () => {
    console.log(formData, " ......................F");
    setShowPrint(true);
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  return (
    <>
      {!showPrint && (
        <section className="order-form m-4">
          <div className="container pt-4">
            <div className="row">
              <div className="col-12 px-4">
                <h4>Order Form</h4>
                {/* <span>with some explanation below</span> */}
                <hr className="mt-1" />
              </div>
              {
                <div className="col-12">
                  <div className="row mx-4">
                    <div className="col-sm-6">
                      <div data-mdb-input-init className="form-outline">
                        <label className="order-form-label">{"Client"}</label>
                        <select
                          className="form-control order-form-input"
                          name="client"
                          value={formData.dropdownValue}
                          onChange={handleChange}
                        >
                          <option value="">Select an option</option>
                          {Object.keys(ClientDetails).map((option) => (
                            <option key={option} value={option}>
                              {ClientDetails?.[option]?.["name"]}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              }
              {formData?.client && (
                <>
                  <div className="col-12">
                    <div className="row mx-4">
                      {Object.keys(productNameList).map((option) => (
                        <>
                          <div className="col-sm-6">
                            <div data-mdb-input-init className="form-outline">
                              <Input
                                label={productNameList?.[option] || ""}
                                id={option}
                                className="form-control order-form-input"
                                type={"number"}
                                onChange={handleChange}
                                name={option}
                              />
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row mx-4">
                      <div className="col-sm-12">
                        <div data-mdb-input-init className="form-outline">
                          <label className="order-form-label">{""}</label>
                          <input
                            className="form-control order-form-input"
                            type="button"
                            value="Show"
                            onClick={onClickHandler}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {showPrint && (
        <>
          <div ref={contentToPrint}>
            <Receipt formData={formData} />
          </div>  
          <div>
            <button
              className="form-control order-form-input"
              onClick={() => {
                handlePrint(null, () => contentToPrint.current);
              }}
            >
              <FaPrint className="mr-2" />
              PRINT
            </button>
            <button
              className="form-control order-form-input"
              onClick={() => {
                handlePrint(null, () => contentToPrint.current);
              }}
            >
              <FaTimes className="mr-2" />
              Cancel
            </button>
          </div>
        </>
      )}

      <div className="container">
        <div className="row"></div>
      </div>
    </>
  );
};

export default FormOnen;
