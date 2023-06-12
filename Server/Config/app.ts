/**
 * File: app.ts
 * Student: Himanshu Makhija
 * Student ID: 200541395
 * Date: June 11, 2023
 */

import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// Database modules
import mongoose from 'mongoose';
import db from './db';

mongoose.connect(db.remoteURI);

// Event handler for successful connection to MongoDB.
 
mongoose.connection.on('connected', () =>{
    console.log('Connected to MongoDB');
});

 //Event handler for disconnection from MongoDB.
mongoose.connection.on('disconnected', () =>{
    console.log('Disconnected from MongoDB');
});

import indexRouter from '../Routes/index';


let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));

app.use('/', indexRouter);



export default app;
