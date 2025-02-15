const fs = require("fs");

// Add data
fs.writeFileSync("Task.txt", "Task 1 . Learn Java , Completed: False \n");
fs.appendFileSync("Task.txt", "Task 2 . Learn C++ , Completed: False \n");

const data = fs.readFileSync("Task.txt", "utf-8"); // Read data and store it
console.log(data);

let lines = data.split("\n"); // lines is a array as split method gives a array

if (lines.length > 0) {
  lines[0] = lines[0].replace("Completed: False", "Completed: True"); //  changing 0 index i.e 1 st task as completed
}

let data2 = lines.join("\n");

// Write the updated content back to the file
fs.writeFileSync("Task.txt", data2);

const newChanges = fs.readFileSync("Task.txt", "utf-8");
console.log(newChanges);
