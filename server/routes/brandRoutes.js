const Router = require("express");
const router = new Router();
const barandController = require("../controllers/barandController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), barandController.create);
router.get("/", barandController.getAll);

module.exports = router;