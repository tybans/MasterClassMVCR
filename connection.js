const mongoose = require("mongoose");

// connecting with database
async function dbConnect(){
    try{
    await mongoose.connect(process.env.Mongo_URL);
    console.log("Cnnected to MongoDB");
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}
module.exports = dbConnect