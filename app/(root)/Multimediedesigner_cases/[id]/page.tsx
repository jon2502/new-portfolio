
import ComponentSelctor from '@/components/ComponentSelctor';
import { FetchSelcet } from '@/utils/supabase/connections/FetchSelect';
import Link from 'next/link';
import React from 'react'

const page =  async ({params}: {params: Promise<{ id:string }>}) => {
  const id = (await params).id
  console.log(`${id}`)
  const data = await FetchSelcet('Multimediedesigner cases','Connection', id)
  return (
    <>
    <section>
      <h1>{data[0].titel}</h1>
      <h2>{data[0].subtitel}</h2>
      <button>
        <Link href={`/Multimediedesigner_Case`}>
          <span>Tilbage</span>
        </Link>
      </button>
      <div>
        
      </div>
      {data?.map((Project: Project) => (<ComponentSelctor key={Project?.id} Project={Project}/>))}
    </section>
    </>
  )
}

export default page