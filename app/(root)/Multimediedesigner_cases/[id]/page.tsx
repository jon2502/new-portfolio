
import ComponentSelctor from '@/components/ComponentSelctor';
import { FetchOne } from '@/utils/supabase/connections/FetchOne';
import Image from 'next/image';
import Link from 'next/link';

const page =  async ({params}: {params: Promise<{ id:string }>}) => {
  const {id} = await params
  const data = await FetchOne('Multimediedesigner cases','Connection', id)
  console.log(data)
  return (
    <>
    <section className='container-col test mobiletest pb-[30px]'>
      <h1>{data.Titel}</h1>
      <h2>{data.Subtitel}</h2>
      <hr></hr>
      <button>
        <Link href={`/Multimediedesigner_cases`}>
          <span>Tilbage</span>
        </Link>
      </button>
      <section>
        <Image src={data.Intro[0]} alt="logo" width={0} height={0} sizes="100vw" style={{ width: '90%', height: 'auto' }}/>
        <div className='flex max-w-5xl mx-auto pt-13'>
          {data.Intro[1].map((text:any)=> (
            <div key={text.titel} className='flex flex-col items-center w-[25%] p-2.5'>
              <h3 className='text-center'>{text.title}</h3>
              <p className='text-center'>{text.info}</p>
            </div>
          ))}
        </div>
        <div>
          <hr></hr>
          <p className='my-[35px] text-center'>{data.Intro[2]}</p>
          <hr></hr>
        </div>
      </section>
      <ComponentSelctor key={data?.id} Project={data}/>
      <div>
        {data.Synopsis.map((text:string)=>(
          <p key={text}>{text}</p>
        ))}
      </div>
    </section>
    </>
  )
}

export default page