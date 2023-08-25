import HeaderComponent from "./components/Ui/Header/Header";
import FormComponent from "./components/Ui/Forms/Forms";
import TableComponent from "./components/Ui/Table/Table";
import { useState } from "react";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (event, userInput) => {

    event.preventDefault();

    // per-year results

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;
    let totalInvestedCapital;
    let totalInterest=0;
    let newYearlyData = [];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInvestedCapital -= currentSavings - yearlyInterest;
      totalInterest += yearlyInterest; // add current yearlyInterest to totalInterest

      newYearlyData.push({
        id: Math.random(),
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: yearlyContribution.toFixed(2),
        totalInvestedCapital: totalInvestedCapital,
        totalInterest:totalInterest
      });
    }
    setYearlyData(newYearlyData);
  };

  return (
    <div>
      <HeaderComponent />
      <FormComponent calculateHandler={calculateHandler} />

      {yearlyData.length > 0 ? (
        <TableComponent data={yearlyData} />
      ) : (
        <>
          <h1 className="no-data">No investment calculated yet! </h1>
        </>
      )}
    </div>
  );
}

export default App;
