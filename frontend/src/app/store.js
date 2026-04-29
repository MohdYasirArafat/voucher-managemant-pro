import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import voucherReducer from "../features/voucherSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    voucher: voucherReducer
  }
});