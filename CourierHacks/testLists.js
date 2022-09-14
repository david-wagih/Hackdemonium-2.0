// Dependencies to install:
// $ npm install node-fetch --save

const fetch = require('node-fetch');

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer pk_prod_9B6B6B122H43EFPMGWQR1T262235'
  },
  body: JSON.stringify({
    "recipients": [
        {
            "recipientId": "0460766e-8463-4905-ae98-b72c7aef41d6",
            "preferences": {
                "notifications": {
                    "abcdefgh12345678": {
                        "channel_preferences": [
                            {
                                "channel": "direct_message"
                            }
                        ],
                        "rules": [
                            {
                                "type": "snooze"
                            }
                        ],
                        "status": "OPTED_IN"
                    }
                },
                "categories": {
                    "cooking": {
                        "channel_preferences": [
                            {
                                "channel": "direct_message"
                            }
                        ],
                        "rules": [
                            {
                                "type": "snooze"
                            }
                        ],
                        "status": "OPTED_IN"
                    }
                }
            }
        }
    ]
  })
};

fetch('https://api.courier.com/lists/yelay/subscriptions', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));