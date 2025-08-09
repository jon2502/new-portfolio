import ComponentSelctor from '@/components/ComponentSelctor';
import { FetchSelcet } from '@/utils/supabase/connections/FetchSelect';
import React from 'react'

const page = async ({params}: {params: Promise<{ id:string }>}) => {
  const id = (await params).id
  const data = await FetchSelcet('Adobe projects','Program', id)

  return (
    <>
      <section>
        {data?.map((project) => (<ComponentSelctor key={project?.id} project={project}/>))}
      </section>
    </>
  )
}

export default page