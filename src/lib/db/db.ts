import { createClient } from 'redis';
import dotenv from 'dotenv'

dotenv.config()

const db = createClient(process.env.REDIS_URL)
// db.connect()

export default db