const mongoose = require("mongoose")

const subscriberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
  },
  address: {
    type: String,
    required: true,
    minlength: 5,
  },
  city: {
    type: String,
    required: true,
    minlength: 2,
  },
  state: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 2,
    uppercase: true
  },
  zip: {
    type: Number,
    minlength: 5,
    maxlength: 5,
    required: true,
  },
  email: {
    type: String,
    required: true,
     validate: {
       validator: function(v) {
         return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
       },
       validationAction: "warn"
    }     // this validation is crashing my app, but it does give the error information
          // in the console, so I think this is working as intended. 
          // I will need to investigate how to do this with just a warning to the user rather than crashing the server.
  }
})

const Subscriber = mongoose.model("subscribers", subscriberSchema)

module.exports = Subscriber