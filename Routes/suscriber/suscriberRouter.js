const { Router } = require("express");
const router = Router();
const handleCreateSuscriber = require("../../Controllers/suscribers/createSuscriberController")
const handleReadSuscriber= require("../../Controllers/suscribers/readSuscriberController")
const handleUpdateSuscriber = require("../../Controllers/suscribers/updateSuscriberController")
const handleDeleteSuscriber= require("../../Controllers/suscribers/deleteSuscriberController")


router.post("/", handleCreateSuscriber)
router.get("/", handleReadSuscriber)
router.put("/", handleUpdateSuscriber)
router.delete("/", handleDeleteSuscriber)

module.exports = router;