import { useState } from "react";

function VoucherForm() {
  const [rows, setRows] = useState([
    {
      account: "",
      amount: "",
      tdsApplicable: "No"
    }
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      { account: "", amount: "", tdsApplicable: "No" }
    ]);
  };

  return (
    <div>
      {rows.map((row, index) => (
        <div key={index}>
          <input placeholder="Account" />
          <input placeholder="Amount" />
        </div>
      ))}

      <button onClick={addRow}>+</button>
    </div>
  );
}

export default VoucherForm;


username: admin
password: admin123


username: staff
password: staff123