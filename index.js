// requiring file system
const fs = require("fs");
const text = fs.readFileSync("./dummy.txt", "utf-8");
console.log(text);
const newText = `This is the new added text. ${text} .\n Created on ${new Date().toString()}`;
fs.writeFileSync("./dummyTxt.txt", newText);
console.log("File has been created successfully");
