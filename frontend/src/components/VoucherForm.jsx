import { useState } from "react";

function VoucherForm() {
  const [voucherType, setVoucherType] = useState("Payment");
  const [narration, setNarration] = useState("On Account");

  const [rows, setRows] = useState([
    {
      account: "",
      amount: "",
      tdsApplicable: "No",
      tdsType: ""
    }
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        account: "",
        amount: "",
        tdsApplicable: "No",
        tdsType: ""
      }
    ]);
  };

  const removeRow = (index) => {
    const updated = rows.filter((_, i) => i !== index);
    setRows(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const total = rows.reduce(
    (sum, row) => sum + Number(row.amount || 0),
    0
  );

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6">Create Voucher</h2>

      <div className="grid grid-cols-2 gap-4 mb-5">
        <select
          value={voucherType}
          onChange={(e) => setVoucherType(e.target.value)}
          className="border p-3 rounded"
        >
          <option>Payment</option>
          <option>Received</option>
        </select>

        <input
          value={narration}
          onFocus={() =>
            narration === "On Account" && setNarration("")
          }
          onChange={(e) => setNarration(e.target.value)}
          className="border p-3 rounded"
        />
      </div>

      {rows.map((row, index) => (
        <div key={index} className="grid grid-cols-5 gap-3 mb-3">
          <input
            placeholder="Account"
            className="border p-2 rounded"
            value={row.account}
            onChange={(e) =>
              handleChange(index, "account", e.target.value)
            }
          />

          <input
            placeholder="Amount"
            className="border p-2 rounded"
            value={row.amount}
            onChange={(e) =>
              handleChange(index, "amount", e.target.value)
            }
          />

          <select
            className="border p-2 rounded"
            value={row.tdsApplicable}
            onChange={(e) =>
              handleChange(
                index,
                "tdsApplicable",
                e.target.value
              )
            }
          >
            <option>No</option>
            <option>Yes</option>
          </select>

          {row.tdsApplicable === "Yes" ? (
            <input
              placeholder="TDS Type"
              className="border p-2 rounded"
              value={row.tdsType}
              onChange={(e) =>
                handleChange(index, "tdsType", e.target.value)
              }
            />
          ) : (
            <div></div>
          )}

          <button
            onClick={() => removeRow(index)}
            className="bg-red-500 text-white rounded px-3"
          >
            X
          </button>
        </div>
      ))}

      <button
        onClick={addRow}
        className="bg-green-600 text-white px-4 py-2 rounded mt-3"
      >
        + Add Row
      </button>

      <div className="mt-6 text-lg font-semibold">
        Total DR Amount:
        {voucherType === "Payment" ? total : 0}
      </div>

      <div className="text-lg font-semibold">
        Total CR Amount:
        {voucherType === "Received" ? total : 0}
      </div>
    </div>
  );
}

export default VoucherForm;