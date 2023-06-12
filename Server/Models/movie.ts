/**
 * File: movie.ts
 * Student: Himanshu Makhija
 * Student ID: 200541395
 * Date: June 11, 2023
 */


import { Schema,  model } from 'mongoose';

// interface representing a document in MongoDB
interface IMovie
{
    movieID: string,
    title: string,
    studio: string,
    genres: string[],
    directors: string[],
    writers: string[],
    actors: string[],
    year: number,
    length: number,
    shortDescription: string,
    mpaRating: number,
    criticsRating: number,
    poster: string
}
// Schema corresponding to the document interface
let movieSchema = new Schema<IMovie>({
    movieID: String,
    title: String,
    studio: String,
    genres: [String],
    directors: [String],
    writers: [String],
    actors: [String],
    year: Number,
    length: Number,
    shortDescription: String,
    mpaRating: Number,
    criticsRating: Number,
    poster: String
});

// model
let Movie = model<IMovie>('Movie', movieSchema);

export default Movie;