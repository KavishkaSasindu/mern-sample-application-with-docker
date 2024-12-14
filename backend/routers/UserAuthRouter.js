const UserAuthController = require("../controllers/UserAuthController");
const authenticateUser = require("../middleware/UserMiddleware");
const express = require("express");
const router = express.Router();

router.post("/signUp", UserAuthController.signUp);
router.post("/signIn", UserAuthController.signIn);
router.put("/api/user/update/:id", UserAuthController.updateUser);
router.delete("/api/user/delete/:id", UserAuthController.deleteUser);
router.get("/api/user/data/:id", UserAuthController.getUserDataById);
router.get(
  "/api/user/allData",
  authenticateUser,
  UserAuthController.getUserData
);

module.exports = router;
