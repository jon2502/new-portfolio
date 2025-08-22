
import React from 'react'
import { FetchAll } from '@/utils/supabase/connections/fetchAll'
import Link from 'next/link'
import Image from 'next/image'

const page = async () => {

  const data = await FetchAll('Adobe programs')

  return (
    <section>
      <p>Når det kommer til adobe så har jeg en God erfaring med en del af programmerne.  Ud af alle adobe programmerne så er dem jeg er mest erfarende med Photoshop; ilustrator, After effect og premiere pro.</p>
      <p>Nedenunder kan du læse mere samt finde eksempler på hvad jeg har lavet med de forskellige programmer.</p>
      <div>
        {data.map((program)=>(
          <section key={program.id} className='flex justify-center max-w-9/10'>
            <div className='flex gap-[5vw]'>
              <div>
                <Image src={program.Image} alt={program.Title+" Logo"} width={300} height={300}/>
              </div>
              <div>
                <div>
                  <h4><strong>{program.Title}</strong></h4>
                  <ul>
                    {program.List.map((listelm:any)=>(
                      <li key={listelm}>
                        {listelm}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='text-right'>
                  <button>
                    <Link href={`/Adobe_Programmer/${program.Title}`}>
                      <span>Se eksempler</span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}

      </div>
    </section>
  )
}

export default page