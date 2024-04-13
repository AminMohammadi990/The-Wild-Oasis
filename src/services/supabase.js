import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yqpiapipnqlpnkhgaqgt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxcGlhcGlwbnFscG5raGdhcWd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4MjEyMjAsImV4cCI6MjAyODM5NzIyMH0.K0PoUAxcW4ugQWCUxvjG5b9P8gqNiZ8l-_V6EvmN8uQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
