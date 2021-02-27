//build express app and host it on a cloud function
const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Hrbt3BcPkps6lUoCDVzHw4mZ67QdiQ6nXOCIFwsZXG8JUDVg1AENuRSjfaqpRIM5422whjmw6yaTjsGzB8XHSiR00ujiF4hVl')

//API SET-UP
//app config
const app = express();
//middle wares
app.use(cors({ origin: true}));
app.use(express.json());

//emulate to run on local machine

//api routes
app.get('/', (request, response) => {
    response.status(200).send('hello world')
})
app.post('/payments/create', async  (request, response) => {
    const total = request.query.total;
    console.log('payment request received boom!!!!!', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd"
    })
    //OK-Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//listen command
exports.api = functions.https.onRequest(app)