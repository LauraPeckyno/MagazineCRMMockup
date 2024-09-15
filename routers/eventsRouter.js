const express = require('express');
const eventsRouter = express.Router();
const eventsController = require('../controllers/eventsController');

eventsRouter.get('/', eventsController.readEvent);
eventsRouter.get('/:id', eventsController.readEventById);
eventsRouter.post('/', eventsController.createEvent);
eventsRouter.put('/:id', eventsController.updateEvent);
eventsRouter.delete('/:id', eventsController.deleteEvent);

module.exports = eventsRouter;