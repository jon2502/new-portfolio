
import Link from 'next/link';
import Image from 'next/image';
import { FetchAll } from '@/utils/supabase/connections/fetchAll';
import Accordion from '@/components/Accordion';

export default async function Home() {
      const content = await FetchAll('frontpage section content')

  return (
    <>
      <div>
        <h1>Jon Bjarke Sørensen - Portfolio</h1>
      </div>
      <hr />
      <div>
        <p>Mit navn er Jon Bjarke Sørensen, jeg er uddannet webudvikler og multimedie designer</p>
      </div>
      <section className='flex-between'>
        <div>
          <Image src="" alt="logo" width={10} height={10}/>
          <p>
            Erfaring inden for billede redigering.
          </p>
        </div>
        <div>
          <Image src="" alt="logo" width={10} height={10}/>
          <p>
            Erfaring inden for video redigering.
          </p>
        </div>
        <div>
          <Image src="" alt="logo" width={10} height={10}/>
          <p>
            Erfaring inde for vektor tegnening.
          </p>
        </div>
        <div>
          <Image src="" alt="logo" width={10} height={10}/>
          <p>
            Erfaring inden for kodning JavaScript, Vue.js, React.js og Next.js.
          </p>
        </div>
        <div>
          <Image src="" alt="logo" width={10} height={10}/>
          <p>
            Erfaring inden for datahåndtering og databaser.
          </p>
        </div>
      </section>
      {content?.map((test:{id:string, Title:string, images:Array<{Image:string, Text:string}>, Text:[], Link:string}) => (
        <section key={test.id} className='container test mobiletest pb-[30px]'>
            <div className='flex flex-col'>
              <div className='text-center pb-[25px]'>
                <h2>{test.Title}</h2>
              </div>
              <div className='container'>
                <div className='test1 grow-[0] shrink-[0]'>
                  <Accordion images={test.images}/>
                </div>
                <div className='flex flex-col'>
                  {test.Text.map((text: {Attribute:string, Index:number, Content:string[]}) => (
                    text?.Attribute === "p" ? (
                      <p key={`${test.id}.${text.Index}`}> {text.Index}</p>
                      ): text?.Attribute === "ul" ? (
                        <ul key={`${test.id}.${text.Index}`}>
                          {text.Content.map((li:string, index: number) =>(
                            <li key={index}>{li}</li>
                          ))}
                        </ul>
                      ):(null)
                  ))}
                  <button>
                    <Link href={test.Link}>
                        <span>Text</span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
        </section>
      ))}
    </>
  );
}
