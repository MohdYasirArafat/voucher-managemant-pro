import { createSlice } from "@reduxjs/toolkit";

const voucherSlice = createSlice({
  name: "voucher",
  initialState: {
    vouchers: []
  },
  reducers: {
    setVouchers: (state, action) => {
      state.vouchers = action.payload;
    }
  }
});

export const { setVouchers } = voucherSlice.actions;
export default voucherSlice.reducer;