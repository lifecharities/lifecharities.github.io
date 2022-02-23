console.log("Running tests...");

const c = require("centra");
const path = require("path");
const fs = require("fs");

// read the file and convert it to a node module
let tmpCode = "module.exports = " + fs.readFileSync(path.resolve(__dirname, "../charities.js"), "utf-8").slice(13);
fs.writeFileSync(path.join(__dirname, "tmp.js"), tmpCode);

const charities = require("./tmp.js");
const lastChar = charities[charities.length - 1];

(async () => {
  await c(lastChar["Homepage Link"]).send();
  await c(lastChar["Donation Link"]).send();
})();

console.log("Test success!");
