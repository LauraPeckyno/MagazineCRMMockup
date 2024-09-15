const mongoose = require("mongoose")
const inventorySchema = new mongoose.Schema({
issueNum: Number,
issueName: String,
pubDate: Date,
inventoryNum: Number
})

const Inventory = mongoose.model("inventory", inventorySchema)

module.exports = Inventory