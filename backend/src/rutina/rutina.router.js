const router = require("express").Router();

const rutinaServices = require('../rutina/rutina.services')

router.get("/", rutinaServices.getAllRutina)

router.get("/:id", rutinaServices.getRutinayId)
router.patch("/:id", rutinaServices.patchRutina)
router.delete("/:id", rutinaServices.deleteRutina)

module.exports = router