const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema= new mongoose.Schema({
    name: String,
    shotDescription: String,
    discription : String,
    Price: Number,
    discount: Number,
    images:Array(String),
    categoryId: {type:Schema.Types.ObjectId, ref:'categories'}
});
const Product = mongoose.model("product",productSchema);
module.exports = Product; 