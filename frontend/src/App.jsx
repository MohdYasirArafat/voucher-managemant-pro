import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateVoucher from "./pages/CreateVoucher";
import EditVoucher from "./pages/EditVoucher";
import VoucherList from "./pages/VoucherList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Create Voucher */}
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreateVoucher />
            </PrivateRoute>
          }
        />

        {/* Voucher List */}
        <Route
          path="/vouchers"
          element={
            <PrivateRoute>
              <VoucherList />
            </PrivateRoute>
          }
        />

        {/* Edit Voucher (Admin only) */}
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute adminOnly={true}>
              <EditVoucher />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;