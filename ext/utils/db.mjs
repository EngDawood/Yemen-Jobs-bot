import { supabase } from './supabase.mjs';
import { log } from './colorLog.mjs';

export const db = supabase;

export const chatCollection = () => db.from('chats');
export const logCollection = () => db.from('logs');
export const spamCollection = () => db.from('spam');

export async function connectDB() {
    const { error } = await db.from('chats').select('*').limit(1);
    if (error) {
        log.error('Failed to connect to Supabase:', error.message);
        process.exit(1);
    } else {
        log.success('Connected to Supabase');
    }
}
