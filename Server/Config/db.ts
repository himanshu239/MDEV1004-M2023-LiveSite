/**
 * File: db.ts
 * Student: Himanshu Makhija
 * Student ID: 200541395
 * Date: June 11, 2023
 */


// Local MongoDB URI
let localURI = 'mongodb://127.0.0.1:27017/movies';

// Remote MongoDB URI
let remoteURI = 'mongodb+srv://himanshu:Assignment1@moviecluster.uxwktap.mongodb.net/movies';


/**
 * MongoDB connection configuration object.
 * Contains URIs for both local and remote MongoDB instances.
 */
export default {
    localURI: localURI,
    remoteURI: remoteURI
}