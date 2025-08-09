import { createServerSupabaseClient } from "@/utils/supabase/client";

export default async function Programmeringssprog() {
    const supabase = await createServerSupabaseClient();
    const { data: Programmeringssprog } = await supabase.from("Programmeringssprog").select();

    return <pre>{JSON.stringify(Programmeringssprog, null, 2)}</pre>
}