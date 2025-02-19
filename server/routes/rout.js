const Router = require("express");
const router = new Router();
const deviceRouters = require("./deviceRoutes");
const brandRoutes = require("./brandRoutes");
const typeRoutes = require("./typeRoutes");
const userRoutes = require("./userRoutes");

router.use("/user", userRoutes);
router.use("/type", typeRoutes);
router.use("/brand", brandRoutes);
router.use("/device", deviceRouters);

module.exports = router;