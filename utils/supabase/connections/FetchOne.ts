
import { createServerSupabaseClient } from "../client"

export async function FetchOne(Table: string, Row: string, Filter: string) {
    //connection for when only one element is needed so it only returns an object instead of a array with a single element in it
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase
        .from(Table)
        .select()
        .eq(Row, Filter)
        .order('id', { ascending: true })
        .limit(1)
        .single()

    if (error) throw new Error(error.message)
    return data
}