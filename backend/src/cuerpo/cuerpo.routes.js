const router = require("express").Router();

const rutinaServices = require('../rutina/rutina.services')
const cuerpoServices = require('./cuerpo.services')

router.get("/", cuerpoServices.getAllCuerpo)
router.post("/", cuerpoServices.postNewCuerpo)

router.get("/:id", cuerpoServices.getCuerpoyId)
router.delete("/:id", cuerpoServices.deleteCuerpo)
router.patch("/:id", cuerpoServices.patchCuerpo)

router.get("/front/2d", cuerpoServices.getId2d)

//asi creamos la relacion con la tabla
//* el post esta en cuerpo, le pasas el id de la tabla que quieres agregar (como parametro) y lo datos de body 
// ejem - metodo pots- http://127.0.0.1:8080/api/v1/cuerpo/1

router.post("/:id", rutinaServices.postNewRutina)


module.exports = router