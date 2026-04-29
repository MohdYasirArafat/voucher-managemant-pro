import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function VoucherList() {
  const { role } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">
          Voucher List
        </h1>

        <table className="w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">Date</th>
              <th className="p-3">Type</th>
              <th className="p-3">Narration</th>
              <th className="p-3">Debit</th>
              <th className="p-3">Credit</th>
              {role === "admin" && (
                <th className="p-3">Actions</th>
              )}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">29/04/2026</td>
              <td className="p-3">Payment</td>
              <td className="p-3">On Account</td>
              <td className="p-3">1000</td>
              <td className="p-3">0</td>

              {role === "admin" && (
                <td className="p-3 flex gap-3">
                  <button className="bg-yellow-500 px-3 py-1 rounded text-white">
                    Edit
                  </button>
                  <button className="bg-red-500 px-3 py-1 rounded text-white">
                    Delete
                  </button>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VoucherList;