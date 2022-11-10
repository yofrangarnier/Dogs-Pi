const axios = require("axios");
const { API_KEY } = process.env;
const { Dog, Temperament } = require("../db");
const getAllDogs = async () => {
  const newApi = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  const myInfo = await newApi.data.map((e) => {
    return {
      id: e.id,
      name: e.name,
      min_height: e.height.metric.split("-")[0].trim(),
      max_height: e.height.metric.split("-").reverse()[0].trim(),
      min_weight: e.weight.metric.split("-")[0].trim(),
      max_weight: e.weight.metric.split("-").reverse()[0].trim(),
      life_span: e.life_span,
      temperament: e.temperament,
      image: e.image.url,
    };
  });

  return myInfo;
};
const dataInfo = async () => {
  return await Dog.findAll({
    include: [
      {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
};
const allInfo = async () => {
  const searchApi = await getAllDogs();
  let searchDb = await dataInfo();
  searchDb = await searchDb.map((e) => {
    return {
      id: e.id,
      name: e.name,
      min_height: e.min_height,
      max_height: e.max_height,
      min_weight: e.min_weight,
      max_weight: e.max_weight,
      life_span: e.life_span,
      image: e.image,
      temperament: e.temperaments
        .map((e) => {
          return e.name;
        })
        .join(", "),
      createdInDb: e.createdInDb,
    };
  });
  const totalInfo = [...searchApi, ...searchDb];
  return totalInfo;
};
module.exports = {
  getAllDogs,
  allInfo,
};
