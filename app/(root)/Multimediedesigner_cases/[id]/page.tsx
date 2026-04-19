
import ComponentSelctor from '@/components/ComponentSelctor';
import { FetchOne } from '@/utils/supabase/connections/FetchOne';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page =  async ({params}: {params: Promise<{ id:string }>}) => {
  const id = (await params).id
  const data = await FetchOne('Multimediedesigner cases','Connection', id)
  return (
    <>
    <section className='container-col test mobiletest pb-[30px]'>
      <h1>{data.titel}</h1>
      <h2>{data.subtitel}</h2>
      <button>
        <Link href={`/Multimediedesigner_Case`}>
          <span>Tilbage</span>
        </Link>
      </button>
      <section>
        <Image src={data.Intro[0]} alt="logo" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
        <div>
          {data.Intro[1].map((text:any)=> (
            <div>
              <p>{text.titel}</p>
              <p>{text.info}</p>
            </div>
          ))}
        </div>
        <p>{data.Intro[2]}</p>
      </section>
      <ComponentSelctor key={data?.id} Project={data}/>
      <div>
        {data.Synopsis.map((text:any)=>(
          <p>{text}</p>
        ))}
      </div>
    </section>
    </>
  )
}

export default page