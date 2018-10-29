/*jshint esversion:6*/
console.log("hello world of full stacks !!");
window.addEventListener("DOMContentLoaded", function start() {
  const crud = new CRUDHelper();
  console.log("crud helper");
  console.log(crud);
  if (document.getElementById("set_user_age")) ageRange();
});
