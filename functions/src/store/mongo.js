import { MongoClient } from 'mongodb';
import { env } from '../config/env.js';

let client;
let db;

export async function getMongoDb() {
  if (!env.mongodbUri) {
    return null;
  }

  if (!client) {
    client = new MongoClient(env.mongodbUri);
    await client.connect();
    db = client.db(env.mongodbDbName);
  }

  return db;
}
