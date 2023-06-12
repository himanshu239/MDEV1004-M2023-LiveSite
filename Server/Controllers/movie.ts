/**
 * File: movie.ts
 * Student: Himanshu Makhija
 * Student ID: 200541395
 * Date: June 11, 2023
 */


import { Request, Response, NextFunction } from 'express';

import Movie from '../Models/movie';

/**
 * Display the list of movies.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function.
 * @returns {void}
 */

export function DisplayMovieList(req: Request, res: Response, next: NextFunction): void
{
    
    Movie.find({})
    .then(function(data)
    {
        res.json(data);
    })
    .catch(function(err)
    {
        console.error(err);
    });

  
}