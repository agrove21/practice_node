const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();
const users = [{ username: "testuser", password: "test1234" }];

function init() {
  prompt([
    {
      type: "list",
      name: "option",
      message: "Login or register to continue:",
      choices: ["login", "register"],
    },
  ]).then((answers) => {
    if (answers.option == "login") {
      login();
    } else {
    }
  });
}

function login() {
  prompt([
    {
      type: "input",
      name: "username",
      message: "Enter username:",
    },
    {
      type: "input",
      name: "password",
      message: "Enter password:",
    },
  ]).then((answers) => {
    const foundUser = users.find((user) => user.username == answers.username);
    if (!foundUser) {
      console.log("user not found");
      init();
      return;
    }
    if (foundUser.password !== answers.password) {
      console.log("incorrect password. try again.");
      login();
      return;
    }
  });
}
init();
