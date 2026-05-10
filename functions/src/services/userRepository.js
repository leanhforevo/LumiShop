import { supabase } from '../store/supabase.js';
import { getMongoDb } from '../store/mongo.js';

export async function createUserRecord({ email, provider = 'email', metadata = {} }) {
  const record = {
    email,
    provider,
    metadata,
    created_at: new Date().toISOString(),
  };

  if (supabase) {
    await supabase.from('users').insert(record);
  }

  const mongo = await getMongoDb();
  if (mongo) {
    await mongo.collection('users').insertOne(record);
  }

  return record;
}
