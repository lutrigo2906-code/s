// Cole aqui os dados do seu projeto Supabase.
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://wyrtxkmjdbqlagqzodvq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_J-O6vxBt0tp5UuODQfvINw_xdXX09_p";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
 
