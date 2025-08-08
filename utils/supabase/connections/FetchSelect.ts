
import { createServerSupabaseClient } from "../client"

export async function FetchSelcet(Table: string, Row: string, Filter: string) {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase
        .from(Table)
        .select()
        .eq(Row, Filter)
        .order('id', { ascending: true })

    if (error) throw new Error(error.message)
    return data
}