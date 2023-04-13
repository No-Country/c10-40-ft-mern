const router = require("express").Router();

const ExerciseServices = require("../exercise/exercise.services");
const BodyPartServices = require("./bodyPart.services");

router.get("/", BodyPartServices.getAllBodyPart);
router.post("/", BodyPartServices.postNewBodyPart);

router.get("/:id", BodyPartServices.getBodyPartById);
router.delete("/:id", BodyPartServices.deleteBodyPart);
router.patch("/:id", BodyPartServices.patchBodyPart);

//asi creamos la relacion con la tabla
//* el post esta en BodyPart, le pasas el id de la tabla que quieres agregar (como parametro) y lo datos de body
// ejem - metodo pots- http://127.0.0.1:8080/api/v1/body-part/1

router.post("/:id", ExerciseServices.postNewExercise);

module.exports = router;
