const express = require("express");
const router = express.Router();
const app = express();
const homeController = require("../controllers/homeController");
const contactController = require("../controllers/contactController");
const servicesController = require("../controllers/servicesController");
const skillController = require("../controllers/skillController");

router.get("/", homeController);
router.get("/skill", skillController);
router.get("/services", servicesController);
router.get("/contact", contactController);


module.exports = router;
