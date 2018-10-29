/*jshint esversion :  6 */

// @root/api/country.js

const countryAPi = function countryAPi(connection) {

  const router = require("express").Router();
  const countryModel = require("./../model/country")(connection);

  router.post('/country/', (req, res) => {
    countryModel.post((err, dataset) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(dataset[0]);
    }, req.body.data);
  });

  router.get('/country/:id', (req, res) => {
    countryModel.get((err, dataset) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(dataset[1]);
    }, req.params.id);
  });

  router.get('/country', (req, res) => {
    countryModel.get( (err, dataset) => {
      res.send(dataset);
    }, null);
  });

  router.delete('/country', (req, res) => {
    countryModel.remove((err, dataset) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(dataset);
    }, req.body.ids); // tableau d'ids ici ...
  });

  router.patch('/country', (req, res) => {
    countryModel.update((err, dataset) => {
      if (err) return res.status(500).send(err);
      else return res.status(200).send(dataset);
    }, req.body); // un tableau d'ids ici ...
  });

  return router;
};

module.exports = countryAPi;
