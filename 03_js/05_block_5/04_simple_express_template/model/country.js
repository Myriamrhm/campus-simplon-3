/* jshint esversion : 6 */

// @root/model/country.js

const countryModel = function countryModel(connection) {

  const create = function createCountry(clbk, input) {
    const q =  "INSERT into country (country_code, country_name) VALUES (?, ?)";
    connection.query(q, [input.code, input.name], function (err, results, fields) {
      // console.log(this.sql);
      if (err) return clbk(err, null);
      else return clbk(null, results);
    });
  };

  const get = function readCountry(clbk, id) {
      var q;
      if (id) {
        q = "SELECT id, country_name AS name, country_code AS code  FROM country WHERE id = ?";
      } else {
        q = "SELECT id, country_name AS name, country_code AS code FROM country";
      }
      connection.query(q, [id], function (err, data, fields) {
        // console.log(this.sql);
        if (err) return clbk(err, null);
        else return clbk(null, [fields.map(x => x.name), data]);
      });
  };

  const remove = function deleteCountry(clbk, id) {
    const q = "DELETE FROM country WHERE id = ?";
    connection.query(q, [id], function (err, data, fields) {
      // console.log(this.sql);
      if (err) return clbk(err, null);
      else return clbk(null, data);
    });
  };

  const update = function updateCountry(clbk, input) {
    const q = "UPDATE country SET country_code = ?, country_name = ?";
    connection.query(q, [input.code, input.name], function (err, data, fields) {
      // console.log(this.sql);
      if (err) return clbk(err, null);
      else return clbk(null, data);
    });
  };

  return {
    create,
    get,
    remove,
    update
  };
};

module.exports = countryModel;
