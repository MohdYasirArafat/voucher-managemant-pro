import Navbar from "../components/Navbar";
import VoucherForm from "../components/VoucherForm";

function EditVoucher() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <VoucherForm />
      </div>
    </div>
  );
}

export default EditVoucher;