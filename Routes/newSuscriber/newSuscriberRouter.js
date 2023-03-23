const { Router } = require("express");
const router = Router();
const handleCreateSuscriber = require("../../Controllers/suscribers/createSuscriberController")

router.post("/", handleCreateSuscriber)

module.exports = router;