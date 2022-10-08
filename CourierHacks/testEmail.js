// Dependencies to install:
// $ npm install node-fetch --save

const fetch = require("node-fetch");
const prompt = require("prompt-sync")();
require("dotenv").config();

// Functions to send email
async function sendEmail(name, email) {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.API_KEY,
    },
    body: JSON.stringify({
      message: {
        template: "SN0H965C314WR8M6ZXWDSG9NYD8Y",
        to: {
          phone_number: "+14083686126",
          // "email": email
        },
        data: {
          name: name,
        },
      },
    }),
  };
  // Getting Courier API key from .env file
  fetch("https://api.courier.com/send", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

async function getInput() {
  const name = prompt("What is your name? ");
  const email = prompt("What is your email? ");
  const phone = prompt("What is your phone number? ");

  return [name, email, phone];
}

// getInput()

module.exports = { getInput };
