const express = require("express")
const router = express.Router()

const newSuscriberRouter = require("./newSuscriber/newSuscriberRouter")
const suscribersRouter = require("./suscriber/suscriberRouter")

router.use("/newSuscriber", newSuscriberRouter);
router.use("/suscribers", suscribersRouter);

module.exports = router;