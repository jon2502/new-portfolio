import ComponentSelctor from '@/components/ComponentSelctor';
import { createClient } from '@/utils/supabase/client';
import React from 'react'

const page = async ({params}: {params: Promise<{ id:string }>}) => {
  const id = (await params).id
  const supabase = createClient();
  const { data, error } = await supabase
            .from('Adobe projects')
            .select()
            .eq('Program', id)
            .order('id', { ascending: true})

  return (
    <>
      <section>
        {data?.map((project) => (<ComponentSelctor key={project?.id} project={project}/>))}
      </section>
    </>
  )
}

export default page