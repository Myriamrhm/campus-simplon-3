module.exports = (function productAPI() {
    "use strict";
    const express = require('express');
    const router = express.Router();

    return function(db) {
        router.get('/product', function (req, res) {
            res.send('products list');
        });

        router.get('/product/:id', function (req, res) {
            res.send('products unique');
        });

        return router;
    }
}());
