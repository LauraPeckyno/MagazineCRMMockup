const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.json());

const connectToDB = require('./config/connectToDB');
connectToDB((err) => {
  if (err) {
    console.error('Error connecting to DB:', err);
    process.exit(1);
  }
});

// middleware to handle the request body
app.use(express.urlencoded({ extended: true }));

// Telling our Express server the view engine that it'll be using and the type of files to associate
app.set('view engine', 'ejs');
// where to find the views
app.set('views', './views');
// where to find the static files
app.use(express.static('./styles'));

// where to serve the static files
app.use(express.static('./public'));

app.get('/', (req, res)=>{
  res.send("root path")
});  // ROOT path

const inventoryRouter = require('./routers/inventoryRouter');
const magazineRouter = require('./routers/magazineRouter')
const eventsRouter = require('./routers/eventsRouter');
const subscriberRouter = require('./routers/subscriberRouter');

app.use('/inventory', inventoryRouter);
app.use('/events', eventsRouter);
app.use('/subscribers', subscriberRouter);
app.use('/magazines', magazineRouter)

// 404 Middleware
app.use((req, res, next) => {
  res.status(404).send("Resource Not Found");
});

// tell the server to listen for data requests
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});