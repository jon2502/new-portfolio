
import { createClient } from '@supabase/supabase-js'

export function createServerSupabaseClient() {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  )
  return supabase
}