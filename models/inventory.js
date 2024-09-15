const mongoose = require("mongoose")
const inventorySchema = new mongoose.Schema({
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
        validate: {
          validator: function(v) {
            return v <= new Date();
          },
          message: 'Publication date cannot be in the future!'
        }
      },
      inventoryNum: {
        type: Number,
        required: true,
        min: 0,
        max: 10000
      }
    })

const Inventory = mongoose.model("inventory", inventorySchema)

module.exports = Inventory