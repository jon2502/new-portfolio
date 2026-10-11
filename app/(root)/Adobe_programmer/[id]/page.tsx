import ComponentSelctor from '@/components/ComponentSelctor';
import { FetchSelcet } from '@/utils/supabase/connections/FetchSelect';
import Link from 'next/link';

const page = async ({params}: {params: Promise<{ id:string }>}) => {
  const {id} = await params
  const data = await FetchSelcet('Adobe projects','Program', id)
  return (
    <>
    <section className='container-col test mobiletest pb-7.5'>
      <h1>{id}</h1>
      <button>
        <Link href={`/Adobe_programmer`}>
          <span>Tilbage</span>
        </Link>
      </button>
      <div>
        
      </div>
      {data?.map((Project: Project) => (<ComponentSelctor key={Project?.id} Project={Project}/>))}
    </section>
    </>
  )
}
export default page
