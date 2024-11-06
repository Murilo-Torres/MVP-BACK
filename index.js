import express from "express"
import mongoose from "mongoose"
const app = express()

mongoose.connect("mongodb+srv://brunonunes72:seEnurx9hH4qNCZ1@cluster0.yridb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", () => { console.log("Connected to MongoDB") });

app.get("/users", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, ()=>{console.log("Servidor rodando.")})
