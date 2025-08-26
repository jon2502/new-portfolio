
import ComponentSelctor from '@/components/ComponentSelctor';
import { FetchSelcet } from '@/utils/supabase/connections/FetchSelect';
import Link from 'next/link';
import React from 'react'

const page =  async ({params}: {params: Promise<{ id:string }>}) => {
  const id = (await params).id
  const data = await FetchSelcet('Adobe projects','Program', id)

  return (
    <>
    <section>
      <h1>{id}</h1>
      <button>
        <Link href={`/Multimediedesigner_Case`}>
          <span>Tilbage</span>
        </Link>
      </button>
      {data?.map((project: Project) => (<ComponentSelctor key={project?.id} project={project}/>))}
    </section>
    </>
  )
}

export default page