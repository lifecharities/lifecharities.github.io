console.log("Running tests...");

const c = require("centra");
const path = require("path");
const fs = require("fs");

// read the file and convert it to a node module
let tmpCode = "module.exports = " + fs.readFileSync(path.resolve(__dirname, "../organizations.js"), "utf-8").slice(13);
fs.writeFileSync(path.join(__dirname, "tmp.js"), tmpCode);

const orgs = require("./tmp.js");
const lastOrg = orgs[orgs.length - 1];

(async () => {
  await c(lastOrg["Homepage Link"]).send();
  await c(lastOrg["Donation Link"]).send();
})();

console.log("Test success!");
