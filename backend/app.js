const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const cors = require("cors");
const categoryRoutes = require("./routes/category");
const brandRoutes = require("./routes/brand");
const productRoutes = require("./routes/product");
const customerRoutes = require("./routes/customer");

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("server running");
});

app.use("/category" ,categoryRoutes);  
app.use("/brand" , brandRoutes); 
app.use("/product",productRoutes);
app.use("/customer",customerRoutes);

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