const router = require("express").Router();

const userServices = require("./users.services");
const passport = require("../middlewares/auth.middleware");

router.get("/", userServices.getAllUsers);
router.post("/", userServices.postNewUser);

router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  userServices.getMyUser
);

router.patch(
  "/me",
  passport.authenticate("jwt", { session: false }),
  userServices.patchMyUser
);
router.patch(
  "/me/completeprofile",
  passport.authenticate("jwt", { session: false }),
  userServices.patchMyProfile
);
router.delete(
  "/me",
  passport.authenticate("jwt", { session: false }),
  userServices.deleteMyUser
);
// Rutas de Rutina

router.get(
  "/me/routines",
  passport.authenticate("jwt", { session: false }),
  userServices.getMyRoutines
);
router.get(
  "/me/routines/:routineId",
  passport.authenticate("jwt", { session: false }),
  userServices.getRoutineByUser
);
router.post(
  "/me/routines/:routineId",
  passport.authenticate("jwt", { session: false }),
  userServices.addRoutine
);

router.delete(
  "/me/routines/:routineId",
  passport.authenticate("jwt", { session: false }),
  userServices.deleteRoutine
);

// Rutas de Ejercicio
router.patch(
  "/me/routines/:routineId/days/:dayId/exercises/:exerciseId",
  passport.authenticate("jwt", { session: false }),
  userServices.updateExerciseCompletion
);

//? /api/v1/users/me

router.get("/:id", userServices.getUserById);
router.patch("/:id", userServices.patchUser);
router.delete("/:id", userServices.deleteUser);

module.exports = router;
