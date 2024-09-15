const express = require('express');
const inventoryRouter = express.Router();
const inventoryController = require('../controllers/inventoryController');

inventoryRouter.get('/', inventoryController.readInventory);
inventoryRouter.get('/:id', inventoryController.readInventoryById);
inventoryRouter.post('/', inventoryController.createInventory);
inventoryRouter.put('/:id', inventoryController.updateInventory);
inventoryRouter.delete('/:id', inventoryController.deleteInventory);

module.exports = inventoryRouter;