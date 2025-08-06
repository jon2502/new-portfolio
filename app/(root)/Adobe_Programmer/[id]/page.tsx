import { createClient } from '@/utils/supabase/client';
import React from 'react'

const page = async ({params}: {params: Promise<{ id:string }>}) => {
  const id = (await params).id
  const supabase = createClient();
  const { data, error } = await supabase
          .from('Adobe projects')
          .select()
          .eq('Program', id)
  return (
    <>
    <div>
      
    </div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
export default page
