const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const cors = require("cors");
const categoryRoutes = require("./routes/category");
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("server running");
});

app.use("/category" ,categoryRoutes);  

async function connectDb(){
    await mongoose.connect("mongodb://localhost:27017",{
    dbName:"e-com-store-db"
});
console.log("Database is connected")
}
connectDb().catch((err)=>{
    console.error(err);
})

app.listen(port,()=>{
    console.log("server running on port",port);
});