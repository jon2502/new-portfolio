
import React from 'react'
import { FetchAll } from '@/utils/supabase/connections/fetchAll'
import Link from 'next/link'

const page = async () => {

  const data = await FetchAll('Adobe programs')

  return (
    <section>
      <p>Når det kommer til adobe så har jeg en God erfaring med en del af programmerne.  Ud af alle adobe programmerne så er dem jeg er mest erfarende med Photoshop; ilustrator, After effect og premiere pro.</p>
      <p>Nedenunder kan du læse mere samt finde eksempler på hvad jeg har lavet med de forskellige programmer.</p>
      <div>
        {data.map((program)=>(
          <div key={program.id}>
            <div>

            </div>
            <div>
              <h4>{program.Title}</h4>
              <ul>
                {program.List.map((listelm:any)=>(
                  <li key={listelm}>
                    {listelm}
                  </li>
                ))}
              </ul>
              <button>
                 <Link href={`/Adobe_Programmer/${program.Title}`}>
                  <span>Se eksempler</span>
                </Link>
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default page