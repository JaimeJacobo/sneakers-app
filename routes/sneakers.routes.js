const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", (req, res) => {
  const options = {
    method: "GET",
    url: "https://v1-sneakers.p.rapidapi.com/v1/sneakers",
    params: { limit: req.body.limit, name: req.body.name },
    headers: {
      "x-rapidapi-host": process.env.RAPIDAPI_HOST,
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
