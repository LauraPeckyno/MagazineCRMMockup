const mongoose = require("mongoose")
const eventSchema = new mongoose.Schema({
date: {
    type: Date,
    required: true
},
location: {
    type: String,
    required: true
},
eventName: {
    type: String,
    required: true
}
})

const Event = mongoose.model("events", eventSchema)

module.exports = Event