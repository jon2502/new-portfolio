
import Link from 'next/link';
import Image from 'next/image';
import { FetchAll } from '@/utils/supabase/connections/fetchAll';

export default async function Home() {
      const content = await FetchAll('frontpage section content')

  return (
    <>
    <div>
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
      {content?.map((test) => (
        <section key={test.id} className='flex flex-col'>
          <div>
            <h2>{test.Title}</h2>
          </div>
          <div className='flex flex-row'>
            <div>
              <p>Test</p>
            </div>
            <div>
              {test.Text.map((text: any) => (
                text?.Attribute === "p" ? (
                  <p>{text.Content}</p>
                  ): text?.Attribute === "ul" ? (
                    <ul>
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
        </section>
      ))}
    </div>
    </>
  );
}
