const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose');

const app = express();

env.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT, async () => {
    console.log('Notification server started');
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Successfully connected to mongo");
    } catch (error) {
        console.log(error);
    }
});