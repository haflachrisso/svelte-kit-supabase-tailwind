import { createClient } from '@supabase/auth-helpers-sveltekit';
import { env } from '$env/dynamic/public';

if(!env.PUBLIC_SUPABASE_URL) {
    throw 'No url!';
}
if(!env.PUBLIC_SUPABASE_ANON_KEY) {
    throw 'No anon key!';
}
export const supabase = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY);