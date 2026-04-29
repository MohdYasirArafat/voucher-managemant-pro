const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {
    const token = jwt.sign(
      { username, role: "admin" },
      process.env.JWT_SECRET
    );

    return res.json({ token, role: "admin" });
  }

  if (username === "staff" && password === "staff123") {
    const token = jwt.sign(
      { username, role: "staff" },
      process.env.JWT_SECRET
    );

    return res.json({ token, role: "staff" });
  }

  res.status(401).json({ message: "Invalid credentials" });
};

module.exports = { login };