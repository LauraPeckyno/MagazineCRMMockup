const express = require('express');
const magazineRouter = express.Router();
const magazineController = require('../controllers/magazineController');

magazineRouter.get('/', magazineController.readMagazine);
magazineRouter.get('/:id', magazineController.readMagazineById);
magazineRouter.post('/', magazineController.createMagazine);
magazineRouter.put('/:id', magazineController.updateMagazine);
magazineRouter.delete('/:id', magazineController.deleteMagazine);

module.exports = magazineRouter;