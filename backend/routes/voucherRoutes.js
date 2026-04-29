const router = require("express").Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {
  createVoucher,
  getVouchers,
  updateVoucher,
  deleteVoucher
} = require("../controllers/voucherController");

router.post("/", auth, createVoucher);
router.get("/", auth, getVouchers);

router.put("/:id", auth, role("admin"), updateVoucher);
router.delete("/:id", auth, role("admin"), deleteVoucher);

module.exports = router;