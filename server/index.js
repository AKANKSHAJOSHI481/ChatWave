const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // to interact to mongodb function

const app = express();
require("dotenv").config();

app.use(cors());    //middleware
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB connection established");
}).catch((err)=>{
    console.error(err);
    console.error("Error connecting");
});
const server = app.listen(process.env.PORT, ()=>{
    console.log('listening on port '+process.env.PORT);
})
