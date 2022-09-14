// Dependencies to install:
// $ npm install node-fetch --save

const fetch = require('node-fetch');
const { getInput } = require('./testEmail');

async function createProfile(name,email,phone)
{
const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer pk_prod_9B6B6B122H43EFPMGWQR1T262235'
  },
  body: JSON.stringify({
    "profile": {
      "email": email,
      "phone_number": phone,
      "name":name
    }
  })
};

fetch('https://api.courier.com/profiles/3', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}

getInput().then((info)=>
{
    createProfile(info[0],info[1],info[2])
})