
import { FetchSelcet } from '@/utils/supabase/connections/FetchSelect';

const page = async ({params}: {params: Promise<{ id:string }>}) => {
  const {id} = await params
  const data = await FetchSelcet('Adobe projects','Program', id)
  return (
    <div>Web udviklings case</div>
  )
}

export default page