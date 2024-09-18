This application is a mockup of a magazine CRM to track subscribers, inventory, and events. 

CRUD operations in the Controllers folder
/////////////////////////////////////////////////////////////////////////
Events CRUD opterations include: createEvent, readEvent, updateEvent, deleteEvent, readEventById.
Subscribers CRUD operations include: createSubscriber, readSubscriber, updateSubscriber, deleteSubscriber, readSubscriberById
Magazine CRUD operations include: createMagazine, readMagazine, updateMagazine, deleteMagazine, readMagazineById

// from index.js
/////////////////////////////////////////////////////////////////////////
const magazineRouter = require('./routers/magazineRouter')
const eventsRouter = require('./routers/eventsRouter');
const subscriberRouter = require('./routers/subscriberRouter');
app.use('/events', eventsRouter);
app.use('/subscribers', subscriberRouter);
app.use('/magazines', magazineRouter)
//////////////////////////////////////////////////////////////////////////


ROUTES in Routes folder
///////////////////////////////////////////////////////////////////////////
// CRUD routing for Magazine -- see controllers //
const express = require('express');
const magazineRouter = express.Router();
const magazineController = require('../controllers/magazineController');
magazineRouter.get('/', magazineController.readMagazine);
magazineRouter.get('/:id', magazineController.readMagazineById);
magazineRouter.post('/', magazineController.createMagazine);
magazineRouter.put('/:id', magazineController.updateMagazine);
magazineRouter.delete('/:id', magazineController.deleteMagazine);
module.exports = magazineRouter;
////////////////////////////////////////////////////////////////////////////

// CRUD routing for subscribers -- see controllers //
const express = require('express');
const subscriberRouter = express.Router();
const subscriberController = require('../controllers/subscriberController');
subscriberRouter.get('/', subscriberController.readSubscriber);
subscriberRouter.get('/:id', subscriberController.readSubscriberById);
subscriberRouter.post('/', subscriberController.createSubscriber);
subscriberRouter.put('/:id', subscriberController.updateSubscriber);
subscriberRouter.delete('/:id', subscriberController.deleteSubscriber);
module.exports = subscriberRouter;
////////////////////////////////////////////////////////////////////////////

// CRUD routing for events -- see controllers //
const express = require('express');
const eventsRouter = express.Router();
const eventsController = require('../controllers/eventsController');
eventsRouter.get('/', eventsController.readEvent);
eventsRouter.get('/:id', eventsController.readEventById);
eventsRouter.post('/', eventsController.createEvent);
eventsRouter.put('/:id', eventsController.updateEvent);
eventsRouter.delete('/:id', eventsController.deleteEvent);
module.exports = eventsRouter;
