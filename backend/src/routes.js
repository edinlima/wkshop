const express = require('express');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');
const chipController = require('./controllers/chipController');


const routes = express.Router();

routes.post('/sessions', sessionController.create);
routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/chips',chipController.index);
routes.post('/chips',chipController.create);


module.exports = routes;