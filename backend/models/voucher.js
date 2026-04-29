const mongoose = require("mongoose");

const voucherSchema = new mongoose.Schema({
  date: String,
  voucherType: String,
  narration: String,
  rows: Array,
  totalDebit: Number,
  totalCredit: Number
});

module.exports = mongoose.model("Voucher", voucherSchema);