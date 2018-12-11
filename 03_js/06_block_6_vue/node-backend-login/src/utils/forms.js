export default (function() {
  ("use strict");

  /**
   * convert a formdata into a JS literal object
   * @function
   * @param {Object} fd - the FormData to convert
   * @return {Object} data - A data object containing all kety/value pairs of the given FormData
   */
  const convertFormDataToObject = function convertFormDataToObject(fd) {
    if (!fd) throw new Error("a FormData object is needed here !");
    const data = {};
    for (let arr of fd) {
      data[arr[0]] = arr[1];
    }
    return data;
  };

  return { convertFormDataToObject };
})();
