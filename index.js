const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

require('dotenv').config();
const router = express.Router();

app.use(express.json());

const connectToDB = require('./config/connectToDB');
connectToDB();

router.get('/', (req,res)=>{
  res.send('in the root directory')
})

// view engine
const ejs = require("ejs");

// Telling our Express server the view engine that it'll be using and the type of files to associate
app.set('view engine', 'ejs')
// where to find the views
app.set('views', './views')

// where to serve the static files
app.use(express.static("./public"));

app.get('/', (req, res)=>{
  res.send("root path")
});  // ROOT path

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


// 404 Middleware
app.use((req, res) => {
    res.status(404).send("Resource Not Found");  // really basic error handling
  });
  
  // tell the server to listen for data requests
  app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
  });