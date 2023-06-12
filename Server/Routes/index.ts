/**
 * File: index.ts
 * Student: Himanshu Makhija
 * Student ID: 200541395
 * Date: June 11, 2023
 */


import express from 'express';
let router = express.Router();


import { DisplayMovieList } from '../Controllers/movie';


/**
 * GET request handler for the root route.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function.
 */

router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Express' });
});

router.get('/movie-list', function(req, res, next)
{
  DisplayMovieList(req, res, next);
});

export default router;