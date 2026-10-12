import { FetchAll } from '@/utils/supabase/connections/fetchAll'
import Link from 'next/link'
import Image from 'next/image'

const page = async () => {

  const data = await FetchAll('Adobe programs')

  return (
    <section className='container-col test mobiletest pb-7.5'>
      <p>Når det kommer til adobe så har jeg en God erfaring med en del af programmerne.  Ud af alle adobe programmerne så er dem jeg er mest erfarende med Photoshop; ilustrator, After effect og premiere pro.</p>
      <p>Nedenunder kan du læse mere samt finde eksempler på hvad jeg har lavet med de forskellige programmer.</p>
      <div>
        {data.map((program, index:number)=>(
          <section key={program.id} className='flex justify-center'>
            <div className='flex w-full'>
              {index % 2 == 0 ? (
                <>
                  <div className='p-2.5 w-[30%]'>
                    <Image src={program.Image} alt={program.Title+" Logo"} width={300} height={300}/>
                  </div>
                  <div className='w-[60%] h-full flex flex-col justify-center'>
                    <div className='mb-5'>
                      <h4 className='mb-2.5'><strong>{program.Title}</strong></h4>
                      <ul className='pl-10'>
                        {program.List.map((listelm:any)=>(
                          <li key={listelm}>
                            {listelm}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='text-right'>
                      <button className='w-30 h-auto'>
                        <Link href={`/Adobe_programmer/${program.Title}`}>
                          <span>Se eksempler</span>
                        </Link>
                      </button>
                    </div>
                  </div>
                </>
              ):(
                <>
                  <div className='w-[60%] h-full flex flex-col justify-center'>
                    <div className='mb-5'>
                      <h4 className='mb-2.5'><strong>{program.Title}</strong></h4>
                      <ul className='pl-10'>
                        {program.List.map((listelm:any)=>(
                          <li key={listelm}>
                            {listelm}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='text-left'>
                      <button className='w-30 h-auto'>
                        <Link href={`/Adobe_programmer/${program.Title}`}>
                          <span>Se eksempler</span>
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className='p-2.5 w-[30%]'>
                    <Image src={program.Image} alt={program.Title+" Logo"} width={300} height={300}/>
                  </div>
                </>
              )}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

export default page