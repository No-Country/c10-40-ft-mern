const router = require("express").Router();

const RoutineServices = require("../routine/routine.services");

router.get("/", RoutineServices.getAllRoutine);
router.post("/", RoutineServices.postNewRoutine);

router.get("/:id", RoutineServices.getRoutineById);
// router.patch("/:id", RoutineServices.patchExercise);
router.delete("/:id", RoutineServices.deleteRoutine);

module.exports = router;
