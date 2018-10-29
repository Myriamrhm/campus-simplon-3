/*jshint esversion:6*/
const ageRange = function ageRange() {
  "use strict";
  const range = document.getElementById("set_user_age");
  const display = document.getElementById("view_user_age");
  range.oninput  = function process() {
    display.innerText = this.value;
  };
};
