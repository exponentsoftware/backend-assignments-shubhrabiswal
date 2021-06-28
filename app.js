const express = require("express");
const app = express();
const mongoose = require("mongoose");
const todos = require("./routes/todo.route");

require("dotenv").config();
app.use(express.json());

app.use("/api", todos);

app.get("/", (req,res) => {
    res.send("To do application...");
})

const connection_string = process.env.CONNECTION_STRING;

mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(() =>
console.log("MongoDB connected successfully")
).catch((error) => 
console.error("MongoDB connection failed: ", error.message))

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})