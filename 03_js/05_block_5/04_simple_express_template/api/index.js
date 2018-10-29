/* jshint esversion : 6 */

// @root/api/index.js

// ROUTAGE DE L'API
const api = (function api() {

  const APIVersion = 1; // notre api est en version 1
  const database = require(__dirname + "/../model")({
    password: "@mysql", // définition du mot de passe de mySQL
    database: "intro_sql" // base de donnée cible
  });

  const routers = []; // on expotera ce tableau une fois rempli de routeurs...
  // IMPORT DES ROUTES DE l'API USER
  const userRouter = require("./user")(database.connection); // module api user
  // IMPORT DES ROUTES DE l'API COUNTRY
  const countryRouter = require("./country")(database.connection);
  ///////////////////////////////////
  // C'est à vous pour la suite ....
  ///////////////////////////////////
  // const billRouter = require("./bill")(database.connection);

  // aggrégation des routeurs dans un tableau
  routers.push(userRouter, countryRouter);

  return { // définition des propriétés publiques du module @root/api/index.js
    version: APIVersion,
    prefix: `/api/v${APIVersion}`,
    routers: routers
  }; // on récupère ces valeurs dans @root/index.js

}());

module.exports = api;
