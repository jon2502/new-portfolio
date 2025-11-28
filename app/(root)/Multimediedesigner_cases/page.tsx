import { FetchSelcet } from '@/utils/supabase/connections/FetchSelect';
import React from 'react'

const page = async() => {
  const data = await FetchSelcet('Uddannelser','Uddannelse', 'Multimediedesigner')
  return (
    <section className='container-col test mobiletest pb-[30px]'>
      <h1>Multimediedesigner cases</h1>
      <p className='mb-[2.5%]'>Cases vist herunder blev alle lavet under min multimedie designer uddannelse på IBA</p>
      {data[0].Cases.map((semester:any)=>(
        <div key={semester.Title} className='flex'>
          <div className='p-[10px] w-[50%] flex flex-wrap content-start'>
            <h1>{semester.Title}</h1>
            <p>{semester.Text}</p>
          </div>
          <div>
            <h1>Cases</h1>
            {semester?.cases?.map((item:any)=>(
              <p key={item}>
                {item}
              </p>
            ))}
          </div>

        </div>
      ))}
    </section>
  )
}

export default page