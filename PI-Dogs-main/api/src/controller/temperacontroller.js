const axios = require("axios");
const { API_KEY } = process.env;
const { Temperament } = require("../db");

const getTemperaments = async () => {
  const apiUrl = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  const apiInfo = await apiUrl.data;
  const temperaments = apiInfo
    .map((d) => d.temperament)
    .join()
    .split(",")
    .sort();

  await temperaments
    .filter((e, i) => temperaments.indexOf(e) === i)
    .forEach(
      (t) =>
        t.trim() !== "" &&
        Temperament.findOrCreate({
          where: {
            name: t.trim(),
          },
        })
    );

  const allTemperaments = await Temperament.findAll({ order: [["name"]] });
  return allTemperaments;
};

module.exports = {
  getTemperaments,
};
