const express = require('express');
const httpServer = express();
const dialer = require('dialer').Dialer;
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const config = {
    url: process.env.URL,
    login: process.env.LOGIN,
    password: process.env.PASS
};

dialer.configure(config);

httpServer.listen(3000, () =>{
    console.log('Example app listening on port 3000!')
} )

// httpServer.get('/call/:number1/:number2', (req, res) => {
//     const number1 = req.params.number1;
//     const number2 = process.env.MY_NUMBER;
//     dialer.call(number1, number2);
//     res.json({success: true});
// })

httpServer.use(bodyParser.json());
httpServer.use(cors());
httpServer.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
});

httpServer.post('/call/', async (req, res) => {
    const number1 = req.body.number;
    const number2 = process.env.MY_NUMBER;
    console.log('Dzwonie', number1, number2)
    const bridge = await dialer.call(number1, number2);
    let interval = setInterval(async () => {
      let status = await bridge.getStatus();
      console.log(status)
      if (
        status === "ANSWERED" ||
        status === "FAILED" ||
        status === "BUSY" ||
        status === "NO ANSWER"
      ) {
        console.log("STOP");
        clearInterval(interval);
      }
    }, 2000);
    res.json({ success: true });
})

httpServer.get('/status', async(req, res) => {
    let status = await bridge.getStatus();
    res.json({ id:'123', "status": status})
})