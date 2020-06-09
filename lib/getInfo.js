const fetch = require("node-fetch");

const getInfo = async (flightNumber) => {
  let data = await fetch(
    `https://api.spacexdata.com/v3/launches/${flightNumber}`
  );

  return await data.json();
};

const getLoction = async () => {
  let data = await fetch(`http://api.open-notify.org/iss-now.json`);

  return await data.json();
};

module.exports = getInfo;
