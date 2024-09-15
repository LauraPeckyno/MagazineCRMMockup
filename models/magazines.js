const mongoose = require("mongoose")
const magazineSchema = new mongoose.Schema({
    issueNum: {
        type: Number,
        required: true,
        min: 1,
        max: 1000,
        unique: true
      },
      issueName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
      },
      pubDate: {
        type: Date,
        required: true,
      },
      inventoryNum: {
        type: Number,
        required: true,
        min: 0,
        max: 10000
      }
    })

const Magazine = mongoose.model("magazine", magazineSchema)

module.exports = Magazine