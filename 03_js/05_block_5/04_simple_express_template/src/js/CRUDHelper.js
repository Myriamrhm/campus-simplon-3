/* jshint esversion : 6 */

const CRUDHelper = function CRUDHelper(p) {
  const okStates = ["complete", "loaded", "interactive"];
  try {
    if (!(this instanceof(CRUDHelper))) throw new Error("bad instanciation");
    if (!okStates.includes(document.readyState)) throw new Error("DOM is not loaded");

  } catch(err) {
    console.error(err);
  }
};

CRUDHelper.prototype.init = function () {
  console.log("init");
};

CRUDHelper.prototype.ajax = function ajax(p) {
  try {

    if (p.method.toLowerCase() === "post") {
      if (!data) throw new Error("bad call");
    }

    const xhr = new XMLHttpRequest();
    xhr.open(p.method, p.url);
    xhr.setRequestHeader('Content-Type', p.contentType || 'application/json');
    xhr.onload = evt => p.callback(evt.target.response || evt.srcElement.response);
    xhr.send(p.data || null);

  } catch(err) { console.error(err); }
};
