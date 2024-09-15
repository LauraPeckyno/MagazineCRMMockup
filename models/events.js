const mongoose = require("mongoose")
const eventSchema = new mongoose.Schema({
date: Date,
location: String,
eventName: String
})

const Event = mongoose.model("events", eventSchema)

module.exports = Event