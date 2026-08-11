import { FetchOne } from '@/utils/supabase/connections/FetchOne';
import Link from 'next/link';
import React from 'react'

const page = async() => {
  const data = await FetchOne('Uddannelser','Uddannelse', 'Multimediedesigner')
  return (
    <section className='container-col test mobiletest pb-[30px]'>
      <h1>Multimediedesigner cases</h1>
      <p className='mb-[2.5%]'>Cases vist herunder blev alle lavet under min multimedie designer uddannelse på IBA</p>
      {data.Cases.map((semester:any)=>(
        <section key={semester.Title} className='flex flex-row max-sm:flex-col'>
          <div className='flex flex-wrap content-start flex-col p-2.5 w-[50%] max-sm:w-[95%]'>
            <h1>{semester.Title}</h1>
            <p className='w-[95%]'>{semester.Text}</p>
          </div>
          <div className='p-2.5 w-[50%] flex flex-wrap content-start flex-col'>
            <h5>Cases</h5>
            <ul>
              {semester?.cases?.map((item:any)=>(
                <li key={item} className='ml-10'>
                  <Link 
                    href={`/Multimediedesigner_cases/${item}`}>
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </section>
  )
}

export default page