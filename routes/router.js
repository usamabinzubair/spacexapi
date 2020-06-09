const { Router } = require("express");
const router = Router();

const getInfo = require("../lib/getInfo");

router.get("/", async (req, res) => {
  res.render("index");
});

router.post("/", async (req, res) => {
  let flightNumber = req.body.flight_number;

  let data = await getInfo(flightNumber);

  let name = data.mission_name;
  let year = data.launch_year;
  let rocketName = data.rocket.rocket_name;

  res.render("index", { data: { name, year, rocketName } });
});

module.exports = router;
