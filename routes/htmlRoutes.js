const router = require("express").Router();
const path = require("path");
const auth = require("../middleware/auth");


// user authorized views - they all use the "auth" middleware
router.get("/", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/dashboard.html")));
router.get("/user/page2", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/page2.html")));
router.get("/user/profile", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/profile.html")));
router.post("/auth/reset-password", auth);

// login and register forms view
router.get("/user/login", (req, res) => res.sendFile(path.join(__dirname, "../public/login.html")));
router.get("/user/register", (req, res) => res.sendFile(path.join(__dirname, "../public/register.html")));

// reset password form view
router.get("/user/reset-password", (req, res) => res.sendFile(path.join(__dirname, "../public/reset-password.html")));

module.exports = router;