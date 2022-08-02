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
  let result = name.filter((name) => name.indexOf(str) !== -1);
  result = result.slice(0, limit);
  callback(result);
}
function showName(name) {
  console.log(name);
}
filterName("an", 3, showName);
