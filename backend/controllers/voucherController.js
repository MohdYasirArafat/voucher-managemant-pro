
const Voucher = require("../models/voucher");

const createVoucher = async (req, res) => {
  const voucher = await Voucher.create(req.body);
  res.json(voucher);
};

const getVouchers = async (req, res) => {
  const vouchers = await Voucher.find();
  res.json(vouchers);
};

const updateVoucher = async (req, res) => {
  const voucher = await Voucher.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(voucher);
};

const deleteVoucher = async (req, res) => {
  await Voucher.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

module.exports = {
  createVoucher,
  getVouchers,
  updateVoucher,
  deleteVoucher
};