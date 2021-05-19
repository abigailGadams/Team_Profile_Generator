// Allows to selectively choose which modules we need
const fs = require("fs");

// In the destination file that we want to receive exported function ** rel path must be exact
const generatePage = require("./src/page-template.js");

// Collecting command line arguments to feed into generateog function
const profileDataArgs = process.argv.slice(2, process.argv.length);

// Extract data and put into distinct arguments -> const name = profileDataArgs[0]; const github = profileDataArgs[1];
const [name, github] = profileDataArgs;

// Must contain 3 elements: name of file, data to write onto file(html), and callback f(n)
fs.writeFile("./index.html", generatePage(name, github), (err) => {
  // display err msg if error occurs
  if (err) throw new Error(err);

  console.log("Portfolio complete! Check out index.html to see the output!");
});
