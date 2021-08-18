const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// stripe secret key
const stripe = require("stripe")('sk_test_51JNoeLCnSjqK47NtUeLfzqojzgu1SfXfow3ntaOuDGAtRgOFV7yOWm14UdDYVHmW9cfxjuE16tEdy1GZPd9qQAoa00rW0Qgphn');


// app config 
const app = express();

// middleware
app.use(cors({ origin: true}));
app.use(express.json());

// api routes
app.get("/", (request, response) => res.status(200).send("Hello World!"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    // note that the total is in cents
    console.log('Payment request received for', total)
    const paymentIntent = await stripe.paymentIntents.create({
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






