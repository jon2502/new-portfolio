
import { createServerSupabaseClient } from "../client"

export async function FetchAll(Table: string) {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase
        .from(Table)
        .select()
        .order('id', { ascending: true})
    if (error) throw new Error(error.message)
    return data
}