import { createClient } from '@/utils/supabase/server';



export default async function Home() {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from('frontpage section content')
        .select()
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
      <section>
        <div>
          <p>
            Erfaring inden for billede redigering.
          </p>
        </div>
        <div>
          <p>
            Erfaring inden for video redigering.
          </p>
        </div>
        <div>
          <p>
            Erfaring inde for vektor tegnening.
          </p>
        </div>
        <div>
          <p>
            Erfaring inden for kodning JavaScript, Vue.js, React.js og Next.js.
          </p>
        </div>
        <div>
          <p>
            Erfaring inden for datahåndtering og databaser.
          </p>
        </div>
      </section>
      {data?.map((test) => (
        <section key={test.id}>
          <h2>{test.Title}</h2>
          {test.Text}
        </section>
      ))}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
    </>
  );
}
