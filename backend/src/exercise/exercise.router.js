const router = require("express").Router();

const ExerciseServices = require("../exercise/exercise.services");

router.get("/", ExerciseServices.getAllExercise);
router.post("/", ExerciseServices.postNewExercise);

router.get("/:id", ExerciseServices.getExerciseById);
router.patch("/:id", ExerciseServices.patchExercise);
router.delete("/:id", ExerciseServices.deleteExercise);

module.exports = router;
