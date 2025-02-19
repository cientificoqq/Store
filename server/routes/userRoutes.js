const Router = require("express");
const router = new Router();
const userController = require("../controllers/userComtroller");
const authMiddleWare = require("../middleware/authMiddleware");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddleWare, userController.check);

module.exports = router;