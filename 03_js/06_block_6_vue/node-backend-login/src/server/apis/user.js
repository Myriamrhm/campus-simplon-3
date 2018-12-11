module.exports = (function userAPI() {
  "use strict";
  const express = require("express");
  const router = express.Router();
  const bcrypt = require("bcrypt");
  const auth = require("./../utils/auth");

  return function userRouter(db) {
    
    const userModel = require("./../models/userModel")(db.connection);

    router.get("/user", auth.authenticate, (req, res) => {
    // router.get("/user", (req, res) => {
      userModel.getAll((err, users) => {
        if (err) return res.status(520).send(err);
        // si pas d'erreur sql, on retourne un status 200 accompagné des users sans les mots de passe et les mails (removeSensitiveInfo)
        return res.status(200).send(users.map(user => {
          // noter l'utilisation de la valeur de retour de array.map
          return auth.removeSensitiveInfo(user);
        }));
      });
    });

    router.get("/user/:id", (req, res) => {
      userModel.get((err, user) => {
        if (err) return res.status(520).send(err);
        return res.status(200).send(auth.removeSensitiveInfo(...user));
      }, req.params.id);
    });

    router.post("/user", (req, res) => {
      const { name, mail, password } = req.body.data;
      const newUser = { mail, name };

      bcrypt.hash(password, 10).then(hash => {
        newUser.password = hash;
        userModel.create(function (err, result) {
          if (err) return res.status(520).send(err);
          return res.status(201).send(result);
        }, newUser);
      }).catch(err => {
        return res.status(500).send(err);
      });
    });

    router.patch("/user", (req, res) => {
      console.log("@patch user");
      res.send("@todo... patch  user !")
    });

    router.delete("/user/:id", (req, res) => {
      //return console.log(req.params.id)
      userModel.remove(function(err, result) {
        if (err) return res.status(500).send(err);
        res.status(200).send(result);
      }, req.params.id);
    });

    router.post("/user/login", (req, res) => {
      // on récupère l'user par son mail
      userModel.getByMail((err, user) => {
    
        // si erreur interne au serveur, retourner l'erreur au client
        if (err) return res.status(500).send(err);
        // sinon si le mail n'existe pas en bdd, retourner une erreur au client
        else if (!user) return res.status(401).send("unknown mail");

        // sinon  le mail a été trouvé, comparer le password avec son crypt/salt
        bcrypt.compare(req.body.user.password, user.password).then(function(match) {
          // si le password est invalide, retourner une erreur au client
          if (!match) return res.status(401).send("login failed"); 
      
          // tout est ok => retourner l'objet user (sans password, etc.) au client
          // accompagné d'un token dans l'entête HTTP pour sécuriser l'accès au dashboard.

          user = auth.removeSensitiveInfo(user);
          const token = auth.createToken(user, req.ip);
          return res.header("x-authenticate", token).status(200).send({user, token});

        }).catch(err => {
          console.log("@catch", err)
          res.status(500).send(err);
        }); // si bcrypt a planté, => erreur au client

      }, req.body.user.mail);
    });

    return router;
  };
})();