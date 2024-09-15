This application is a mockup of a magazine CRM to track subscribers, inventory, and events. 


Events CRUD opterations include: createEvent, readEvent, updateEvent, deleteEvent, readEventById.
Subscribers CRUD operations include: createSubscriber, readSubscriber, updateSubscriber, deleteSubscriber, readSubscriberById
Inventory CRUD operations include: createInventory, readInventory, updateInventory, deleteInventory, readInventoryById


// CRUD routing for inventory -- see controllers //
const inventoryController = require('./controllers/inventoryController'); 
const Inventory = require('./models/inventory');
app.post('/inventory', inventoryController.createInventory);
app.get('/inventory', inventoryController.readInventory);
app.get('/inventory/:id', inventoryController.readInventoryById);
app.put('/inventory/:id', inventoryController.updateInventory);
app.delete('/inventory/:id', inventoryController.deleteInventory);

// CRUD routing for subscribers -- see controllers //
const subscribersController = require('./controllers/subscribersController'); 
const Subscribers = require('./models/subscribers');
app.post('/subscribers', subscribersController.createSubscriber);
app.get('/subscribers', subscribersController.readSubscriber);
app.get('/subscribers/:id', subscribersController.readSubscriberById);
app.put('/subscribers/:id', subscribersController.updateSubscriber);
app.delete('/subscribers/:id', subscribersController.deleteSubscriber);

// CRUD routing for events -- see controllers //
const eventsController = require('./controllers/eventsController'); 
const Events = require('./models/events');
app.post('/events', eventsController.createEvent);
app.get('/events', eventsController.readEvent);
app.get('/events/:id', eventsController.readEventById);
app.put('/events/:id', eventsController.updateEvent);
app.delete('/events/:id', eventsController.deleteEvent);