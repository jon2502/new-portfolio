
import { FetchAll } from '@/utils/supabase/connections/fetchAll'
import Image from 'next/image'
import React from 'react'

const page = async () => {
  const data = await FetchAll('Programmeringssprog')
  console.log(data)
  return (
    <section className='container-col test mobiletest pb-[30px]'>
      <h1>kodning</h1>
      <p>Når det kommer til kodning gør jeg normalt brug af visual studio code til at opsætte mine programmer i.</p>
      <p>Jeg har arbejdet med mange forskelige kodesprog, libraries og frameworks.</p>
      {data.map((program)=>(
        <section key={program.id} className='flex justify-center'>
          <h1>{program.sprog}</h1>
          <div>
            {program.Images.map((Content:any)=>(
                <Image src={Content.Logo} alt={program.sprog+" Logo"} width={300} height={300}/>
            ))}
          </div>
        </section>
      ))}
    </section>
  )
}

export default page