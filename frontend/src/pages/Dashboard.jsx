import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold">
          Voucher Dashboard
        </h1>
      </div>
    </div>
  );
}

export default Dashboard;