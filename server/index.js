import express from "express";
import mongoose from "mongoose";
import downloadRoute from "./routes/index.js"

const app = express();

app.use('/', downloadRoute)


const PORT = 8000;

mongoose
    .connect("mongodb://localhost:27017/mongodb_to_excel")

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => console.log('connected successfully'))

app.listen(PORT, () => {
    console.log("server has started");
});
