const Subscriber = require('../models/subscribers');

// create subscriber
const createSubscriber = async (req, res) => {
  const { firstName, lastName, address, city, state, zip, email } = req.body;
  const subscriber = await Subscriber.create({
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    state: state,
    zip: zip,
    email: email,
  })
  res.json({ subscriber: subscriber })
};

// read subscribers
const readSubscriber = async (req, res) => {
  const subscribers = await Subscriber.find();
  console.log('fetch all subscribers');
  res.json({ subscribers: subscribers })
};

// read subscriber by ID
const readSubscriberById = async (req, res) => {
  const subscriberID = req.params.id //find by ID
  const thisSubscriber = await Subscriber.findById(subscriberID);
  console.log('fetch subscriber by id');
  res.json({ subscriber: thisSubscriber })
};

// update subscriber
const updateSubscriber = async (req, res) => {
  const subscriberId = req.params.id
  const { firstName, lastName, address, city, state, zip, email } = req.body;
  const subscriber = await Subscriber.findByIdAndUpdate(subscriberId, {
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    state: state,
    zip: zip,
    email: email,
  })
  const updatedSubscriber = await Subscriber.findById(subscriberId)
  console.log('update subscriber');
  res.json({ subscriber: updatedSubscriber})
};

// delete a subscriber
const deleteSubscriber= async (req, res) => {
  const subscriberId = req.params.id
  await Subscriber.deleteOne({
    _id: subscriberId 
  })
  res.json({ success: "subscriber deleted" })
};

module.exports = { createSubscriber, readSubscriber, updateSubscriber, deleteSubscriber, readSubscriberById }

