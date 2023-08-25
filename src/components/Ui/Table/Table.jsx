import "./Table.css";

const TableComponent = ({ data }) => {
  return (
    <>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>YEAR NUMBER</td>
            <td>TOTAL SAVINGS END OF YEAR</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
          {/* map over data and create a row for each item */}
          {data.map((data) => (
            
            <>
              <tr key={data.id}>
                <td>{data.year}</td>
                <td>{data.savingsEndOfYear}</td>
                <td>{data.yearlyInterest}</td>
                <td>{data.totalInterest}</td>
                <td>{data.totalInvestedCapital}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
