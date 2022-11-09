const { Router } = require("express");
const dogRouter = Router();
const { allInfo} = require("../controller/dogcontroller");


dogRouter.get("/", async (req, res) => {
  const name = req.query.name;
  const apiDog = await allInfo();
  try {
    if (name) {
      const searchName = await apiDog.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      searchName.length
        ? res.status(200).json(searchName)
        : res.status(404).send("The requested breed of dog was not found");
    } else {
      res.status(200).json(apiDog);
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

dogRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const allId = await allInfo();
  try {
    if (!id){
     res.status(404).send("The requested breed of dog was not found");
    }else{
      const searchId = await allId.find(e => e.id.toString() === id);
      res.status(200).json(searchId);
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
});
module.exports = dogRouter;




