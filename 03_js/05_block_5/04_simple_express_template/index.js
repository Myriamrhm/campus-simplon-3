/* jshint esversion : 6 */

// @root/index.js
const serverDataGetter = require("./utils/serverside-data-getter");
const express = require("express");
const http = require("http");
const port = 8081;
const app = express();
const baseURL = `http://localhost:${port}`;
const api = require(__dirname + "/api");


// APP CONFIG !!!
app.use(express.json()); // on  peut recevoir des données POST en json via req.body
app.use(api.prefix, api.routers); // on préfixe chaque route des API par api/v1/
app.set("view engine", "ejs"); // CHECK THE DOC http://ejs.co/
app.set("views", __dirname + "/view"); //  précise le dossier des vues
// ci-dessous définition de ressources statiques...
app.use("/ejs", express.static(__dirname + "/node_modules/ejs"));
app.use("/fa", express.static(__dirname + "/node_modules/@fortawesome/fontawesome-free/css"));
app.use("/webfonts", express.static(__dirname + "/node_modules/@fortawesome/fontawesome-free/webfonts"));
app.use(express.static(__dirname + "/public"));

// TEMPLATE VARS !!!
// Accessibles dans tout le template via app.locals (API express)
app.locals.site = {};
app.locals.baseURL = baseURL;
app.locals.activeRoute = null;
app.locals.site.title = "JS - Simple Express Template";
app.locals.site.description = "application utilisant node, express JS, ejs et mysql.";
app.locals.site.nav = [
  {label: "accueil", route: "/"},
  {label: "les pays", route: "/country"},
  {label: "les utilisateurs", route: "/user"},
  {label: "les factures", route: "/bill"},
  {label: "nous-contacter", route: "/contact"},
];

function getDataUrl(req, url) {
  return req.protocol + "://" + req.headers.host + api.prefix + (url || req.originalUrl);
}

// ROUTES DES PAGES DE l"APPLICATION
app.get("/", function(req, res) {
  app.locals.site.activeRoute = req.originalUrl;
  res.render("index", {nom: "guillaume"});
  // on passe un objet ({nom: "gui"}) à la vue, utilisable dans le template EJS
});

app.get("/country", function(req, res) {
  app.locals.site.activeRoute = req.originalUrl;
  serverDataGetter(function(err, result) {
    res.render("country", {
      error: err,
      title: "Liste des pays !!!",
      countries: JSON.parse(result)
    });
  }, getDataUrl(req));
});

app.get("/user", function(req, res) {
  app.locals.site.activeRoute = req.originalUrl;
  serverDataGetter(function(err, users) {
    res.render("user", {
      error: err,
      title: "Gérer les Users",
      users: JSON.parse(users)
    });
  }, getDataUrl(req));
});

app.get("/user/:id", function(req, res) {

  app.locals.site.activeRoute = req.originalUrl;

  serverDataGetter(function(err, user) {

    serverDataGetter(function(err, countries) {

      res.render("user-details", {
        error: err,
        title: "Editer l'user n°" + req.params.id,
        countries: JSON.parse(countries)[1],
        user: JSON.parse(user)[0]
      });

    }, getDataUrl(req, "/country"));

  }, getDataUrl(req));
});

app.get("/bill", function(req, res) {
  app.locals.site.activeRoute = req.originalUrl;
  res.render("bill", {
    title: "Gérer les factures"
  });
});

app.get("/contact", function(req, res) {
  app.locals.site.activeRoute = req.originalUrl;
  res.render("contact", {
    title: "Nous contacter"
  });
});

app.listen(port, function() {
  console.log("node server running @ http://localhost:" + port);
});
