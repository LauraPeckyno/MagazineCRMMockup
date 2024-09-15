const mongoose = require("mongoose")

const subscriberSchema = new mongoose.Schema({
firstName: String,
lastName: String,
address: String,
city: String,
state: String,
zip: Number,
email: String,
})

const Subscriber = mongoose.model("subscribers", subscriberSchema)

module.exports = Subscriber