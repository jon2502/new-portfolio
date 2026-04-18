
import ComponentSelctor from '@/components/ComponentSelctor';
import { FetchOne } from '@/utils/supabase/connections/FetchOne';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page =  async ({params}: {params: Promise<{ id:string }>}) => {
  const id = (await params).id
  console.log(id)
  const data = await FetchOne('Multimediedesigner cases','Connection', id)
  console.log(data)
  return (
    <>
    <section>
      <h1>{data.titel}</h1>
      <h2>{data.subtitel}</h2>
      <button>
        <Link href={`/Multimediedesigner_Case`}>
          <span>Tilbage</span>
        </Link>
      </button>
      <div>
        <Image src={data.Intro[0]} alt="logo" width={0} height={0} sizes="100vw" style={{ width: '60%', height: 'auto' }}/>
      </div>
      <ComponentSelctor key={data?.id} Project={data}/>
    </section>
    </>
  )
}

export default page