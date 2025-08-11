import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../features/employees/employeesSlice";
import { store } from "../app/store";
import { departement, state } from "../data";
const DatePicker = React.lazy(() => import("./DatePicker"));
const Dropdown = React.lazy(() => import("./Dropdown"));
const Modal = React.lazy(() => import("./Modal"));

export default function Form({ data }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(data);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith("adress")) {
      const subField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        adress: {
          ...prev.adress,
          [subField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.firstname || !formData.lastname) {
      dispatch({ type: "ERROR", errorMessage: "Tous les champs doivent être remplis." });
      return;
    }
    dispatch(addEmployee(formData));
    localStorage.setItem("employees", JSON.stringify(store.getState().employees.list));
    setFormData(data);
    dispatch({ type: "OPEN_MODAL" });
  };

  return (
    <form id="form_1">
      <div className="field">
        <label htmlFor="firstname">First Name</label>
        <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} />
      </div>
      <div className="field">
        <label htmlFor="lastname">Last Name</label>
        <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} />
      </div>
      <div className="field">
        <DatePicker initialDate={formData.birthday} id={"birthday"} name={"birthday"} label={"Date of Birth"} onDateChange={handleChange} />
      </div>
      <div className="field">
        <DatePicker initialDate={formData.start_day} id={"start_day"} name={"start_day"} label={"Start Date"} onDateChange={handleChange} />
      </div>
      <fieldset id="fieldset_address">
        <legend>Address</legend>
        <div className="field">
          <label htmlFor="street">Street</label>
          <input type="text" id="street" name="adress.street" value={formData.adress.street} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="adress.city" value={formData.adress.city} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="state">State</label>
          <Dropdown data={state} id="state" name="adress.state" onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="zip_code">Zip Code</label>
          <input type="text" id="zip_code" name="adress.zip_code" value={formData.adress.zip_code} onChange={handleChange} />
        </div>
      </fieldset>
      <div className="field">
        <label htmlFor="departement">Departement</label>
        <Dropdown data={departement} id="departement" name="departement" onChange={handleChange} />
      </div>
      <button id="form_submit" onClick={handleSubmit}>
        Save
      </button>
      <Modal />
    </form>
  );
}
