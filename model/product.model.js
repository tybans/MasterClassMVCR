const mongoose = require("mongoose");


const productSchema = new Schema({

    productName: {
        type: String
    },
    product_qnty:{
        type: Number,
        default:20
    },
    company:{
        type: String
    },
    price:{
        type:String
    },
    brand:{
        type: String
    },
    color_choice: {
        type:String,
        enum:["red", "yellow", "green", "blue"],
        default: "red",
    },
    comments:[{}],
    featured:{
        type:Boolean
    }
  
});

// creating model

const productModel =mongoose.model("Product", productSchema);
module.exports = productModel;