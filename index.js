const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());
app.use(require("./routes"));

mongoose.connect("mongodb+srv://Galahad:20030909Bella@cluster0.5mvo4.mongodb.net/Backend")
.then(() => {
    app.listen(port, () => {
        console.log(`Сервер успешно запушен на порте ${port}!`);
    })
})