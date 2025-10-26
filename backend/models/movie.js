
const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title:{type:String, requires:true },
    year:String,
    description:String,
    posterUrl:String
});

module.exports = mongoose.model("Movie",MovieSchema);


