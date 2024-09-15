const Event = require('../models/events');

// create event
const createEvent = async (req, res) => {
  const { date, location, eventName } = req.body;
  const event = await Event.create({
    date: date,
    location: location,
    eventName: eventName,
  })
  res.json({ event: event })
};

// read events
const readEvent = async (req, res) => {
  const events = await Event.find();
  console.log('fetch all events');
  res.json({ events: events })
};

// read event by ID
const readEventById = async (req, res) => {
  const eventID = req.params.id //find by ID
  const thisEvent = await Event.findById(eventID);
  console.log('fetch event by id');
  res.json({ event: thisEvent })
};

// update event
const updateEvent = async (req, res) => {
  const eventId = req.params.id
  const { date, location, eventName } = req.body;
  const event = await Event.findByIdAndUpdate(eventId, {
    date: date,
    location: location,
    eventName: eventName,
  })
  const updatedEvent = await Event.findById(eventId)
  console.log('update Event');
  res.json({ event: updatedEvent})
};

// delete Event
const deleteEvent = async (req, res) => {
  const eventId = req.params.id
  await Event.deleteOne({
    _id: eventId 
  })
  res.json({ success: "event deleted" })
};

module.exports = { createEvent, readEvent, updateEvent, deleteEvent, readEventById }

