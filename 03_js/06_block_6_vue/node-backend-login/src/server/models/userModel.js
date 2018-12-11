module.exports = function(connection) {
  "use strict";
  const auth = require("./../utils/auth");
  const table = "users";
  // CRUD
  const create = function createUser(clbk, payload) {
    const sql = `INSERT INTO ${table} (name, mail, password) VALUES (?, ?, ?)`;
    const { name, mail, password } = payload;
    const query = connection.query(
      sql,
      [name, mail, password],
      (err, res) => {
        if (err) return clbk(err, null);
        return clbk(null, res);
      }
    );
    console.log("last db query =>", query.sql);
  };

  const get = function getUser(clbk, id) {
    const sql = `SELECT * FROM ${table} WHERE id = ?`;
    const q = connection.query(sql, id, (err, user) => {
      if (err) return clbk(err, null);
      return clbk(null, user);
    });
    console.log(q.sql);
  };

  const getByMail = function getUserByMail(clbk, mail) {
    const sql = `SELECT * FROM ${table} WHERE mail = ?`;
    const q = connection.query(sql, mail, (err, user) => {
      if (err) return clbk(err, null);
      return clbk(null, ...user);
    });
    console.log(q.sql);
  };

  const getAll = function getUsers(clbk) {
    const sql = `SELECT * FROM ${table}`;
    
    const q = connection.query(sql, (err, users) => {
      if (err) return clbk(err, null);
      return clbk(null, users);
    });
    console.log(q.sql);
  };
  
  const remove = function removeUser(clbk, id) {
      const sql = `DELETE FROM ${table} WHERE id = ?`;
      const query = connection.query(
          sql,
          [id],
          (err, res) => {
              if (err) return clbk(err, null);
              return clbk(null, res);
          }
      );
      console.log("last db query =>", query.sql);
  };

  return { create, get, getAll, getByMail, remove };
};
