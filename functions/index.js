const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
// stripe secret key
const stripe = require("stripe")("sk_test_51JNoeLCnSjqK47NtUeLfzqojzgu1SfXfow3ntaOuDGAtRgOFV7yOWm14UdDYVHmW9cfxjuE16tEdy1GZPd9qQAoa00rW0Qgphn");


// app config 
const app = express();

// middleware
app.use(cors({ origin: true}));
app.use(express.json());

// api routes
app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("/payments/create", async (req, res) => {
    const total = request.query.total;
    console.log('Payment request received for', total)
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// listen command
exports.api = functions.https.onRequest(app);


// to run front end emulator:
// firebase emulators:start

// view logs on  
// http://localhost:4000/functions :

// example endpoint:
// (http://localhost:5001/clone-14498/us-central1/api)




