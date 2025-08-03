import { createClient } from '@/utils/supabase/server';

export default async function Programmeringssprog() {
    const supabase = await createClient();
    const { data: Programmeringssprog } = await supabase.from("Programmeringssprog").select();

    return <pre>{JSON.stringify(Programmeringssprog, null, 2)}</pre>
}