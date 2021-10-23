const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const app = express();
const PORT = 4003;
const Redis = require("ioredis");
const redis = new Redis();
const cors = require("cors");
const fs = require("fs");
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.get("/dogs", async (req, res, next) => {
  try {
    const data = await redis.get("allDogs");
    if (!data) {
      let { data } = await axios({
        method: "GET",
        url: "https://dog.ceo/api/breeds/list/all",
      });
      const allDogs = data;
      await redis.set("allDogs", JSON.stringify(allDogs));
      res.status(200).json(allDogs);
    } else {
      res.status(200).json(JSON.parse(data));
    }
  } catch (error) {
    console.log(error);
  }
});
app.get("/dogs/:breed", async (req, res, next) => {
  const breed = req.params.breed;
  try {
    const data = await redis.get("breedsData");
    if (!data) {
      console.log("masuk sini");
      let { data } = await axios({
        method: "GET",
        url: `https://dog.ceo/api/breed/${breed}/list`,
      });
      const breedsData = data;
      await redis.set("breedsData", JSON.stringify({ breedsData, breed }));
      res.status(200).json(breedsData);
    } else {
      console.log(data);
      const dogsData = JSON.parse(data);
      if (dogsData.breed === breed) {
        res.status(200).json(JSON.parse(data));
      } else {
        let { data } = await axios({
          method: "GET",
          url: `https://dog.ceo/api/breed/${breed}/list`,
        });
        const breedsData = data;
        await redis.set("breedsData", JSON.stringify({ breedsData, breed }));
        res.status(200).json(breedsData);
      }
    }
  } catch (error) {
    console.log(error);
  }
});
app.get("/dogs/:breed/images", async (req, res, next) => {
  const breed = req.params.breed;
  try {
    const data = await redis.get("dogsImages");
    if (!data) {
      let { data } = await axios({
        method: "GET",
        url: `https://dog.ceo/api/breed/${breed}/images`,
      });
      const dogsImages = data;
      await redis.set("dogsImages", JSON.stringify({ dogsImages, breed }));
      res.status(200).json(dogsImages);
    } else {
      const dogsData = JSON.parse(data);
      if (dogsData.breed === breed) {
        res.status(200).json(JSON.parse(data));
      } else {
        let { data } = await axios({
          method: "GET",
          url: `https://dog.ceo/api/breed/${breed}/images`,
        });
        const dogsImages = data;
        await redis.set("dogsImages", JSON.stringify({ dogsImages, breed }));
        res.status(200).json(dogsImages);
      }
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log("app orchestrator-express listening on port", PORT);
});
