/* jshint esversion : 6 */
module.exports = function serverDataGetter(clbk, url) {
  // revisions : voir node school exos 7 et 8
  const http = require("http");
  // on va chercher les ressources directement sur le serveur
  http.get(url, function(response) {
    let result = "";

    response.on("data", function(chunk) {
      result += chunk.toString();
    });
    response.on("end", function() {
      clbk(null, result);
    });
    response.on("error", function(err) {
      clbk(err, null);
    });
  });
};
