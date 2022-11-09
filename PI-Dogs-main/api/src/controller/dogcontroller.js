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
  const searchDb = await dataInfo();
  const totalInfo = [...searchApi,...searchDb];
  return totalInfo
}
module.exports = {
  getAllDogs,
  allInfo,
};
