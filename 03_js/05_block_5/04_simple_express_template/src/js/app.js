/*jshint esversion:6*/
console.log("hello world of full stacks !!");
window.addEventListener("DOMContentLoaded", function start() {
  const crud = new CRUDHelper();
  console.log("crud helper");
  console.log(crud);
  console.log("axios is here", axios);
  axios.get("https://opendata.paris.fr/api/records/1.0/search/?dataset=stationnement-voie-publique-emplacements&facet=regpri&facet=regpar&facet=typsta&facet=arrond").then(res => {
    console.log(res);
  })
  if (document.getElementById("set_user_age")) ageRange();
});
