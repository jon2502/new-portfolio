import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function Home() {
      const supabase = await createClient();
      const { data: content, error: section_error } = await supabase
        .from('frontpage section content')
        .select()
        .order('id', { ascending: true})
      
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
              <div dangerouslySetInnerHTML={{__html: test.Text}}/>
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
