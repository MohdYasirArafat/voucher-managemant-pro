import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="bg-blue-600 text-white px-6 py-4 flex justify-between">
      <div className="flex gap-6">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create">Create Voucher</Link>
        <Link to="/vouchers">Voucher List</Link>
      </div>

      <div className="flex gap-4 items-center">
        <span>{role}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;