const router = require("express").Router();

const DayServices = require("../day/day.services");

router.get("/", DayServices.getAllDays);

router.get("/:day", DayServices.getDayByName);

module.exports = router;
