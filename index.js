// first divide folder structure
// MVC: model, views and controllers
// MVCR: model, views, controlers and routes
//
// views: when you need to send  static files from server to client
//controllers: main business logic function
// routes: API routes (custom routes)

// main server file: server.listen

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

const server = express();

const Port = process.env.Port;

// follow the official documents 
const dbConnect = require("./connection");
dbConnect()

// importing
const productRouter = require("./routes/product.routes");

//loading my route

server.use("/product", productRouter)

server.listen(Port, ()=>{
    console.log("server is running on Port number 2000");
})