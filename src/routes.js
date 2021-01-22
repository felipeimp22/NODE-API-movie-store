import { Router } from 'express';
import UserController from './app/controllers/UserController';
import FilmsController from './app/controllers/FilmsController';

import SessionController from './app/controllers/SessionController';
import authHeader from './app/middlewares/auth';

const routes = new Router();


routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.post('/createFilms',FilmsController.store )



routes.use(authHeader); // middleware glibal to routes below

routes.put('/users', UserController.update);


routes.get('/availableFilms',FilmsController.availableFilms )

routes.post('/leasing',FilmsController.lease )
routes.post('/returnFilm',FilmsController.returnFilm )



module.exports = routes;
