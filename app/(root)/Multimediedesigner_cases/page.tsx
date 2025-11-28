import { FetchSelcet } from '@/utils/supabase/connections/FetchSelect';
import React from 'react'

const page = async() => {
  const data = await FetchSelcet('Uddannelser','Uddannelse', 'Multimediedesigner')
  console.log(data)
  return (
    <section className='container-col test mobiletest pb-[30px]'>
      <h1>Multimediedesigner cases</h1>
      <p>Cases vist herunder blev alle lavet under min multimedie designer uddannelse på IBA</p>
      {data.map((semester)=>(
        <div key={semester.Title}>
          <h2>{semester.Title}</h2>
        </div>
      ))}
    </section>
  )
}

export default page