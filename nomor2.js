const name = [
  "Abigail",
  "Alexandra",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
];
function filterName(str, limit, callback) {
  try {
    callback(str);
    let result = name.filter((name) => name.indexOf(str) !== -1);
    result = result.slice(0, limit);
    if (!result.length) throw "Data tidak ditemukan";
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
function validation(str) {
  try {
    if (typeof str !== "string") throw "input harus string";
  } catch (error) {
    console.log(error);
  }
}

filterName(4, 2, validation);
