import { useState } from "react";
import "./forms.css";

const FormComponent = (props) => {
  const [formData, setFormData] = useState({
    "currentSavings": "",
    "yearlyContribution": "",
    "expectedReturn": "",
    duration: "",
});
  const handleUserData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // const fromSubmitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  return (
    <>
      <form className="form" onSubmit={(event)=>props.calculateHandler(event,formData)}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              name="currentSavings"
              value={formData.currentSavings}
              onChange={(e) => handleUserData(e)}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              name="yearlyContribution"
              value={formData.yearlyContribution}
              onChange={(e) => handleUserData(e)}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              name="expectedReturn"
              value={formData.expectedReturn}
              onChange={(e) => handleUserData(e)}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={(e) => handleUserData(e)}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </>
  );
};

export default FormComponent;
