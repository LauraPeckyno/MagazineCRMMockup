const express = require('express');
const subscriberRouter = express.Router();
const subscriberController = require('../controllers/subscriberController');

subscriberRouter.get('/', subscriberController.readSubscriber);
subscriberRouter.get('/:id', subscriberController.readSubscriberById);
subscriberRouter.post('/', subscriberController.createSubscriber);
subscriberRouter.put('/:id', subscriberController.updateSubscriber);
subscriberRouter.delete('/:id', subscriberController.deleteSubscriber);

module.exports = subscriberRouter;