import ComponentSelctor from '@/components/ComponentSelctor';
import { createClient } from '@/utils/supabase/client';
import React from 'react'

  type Project = {
  id: number;
  Program:string;
  SetupType:string;
  Title:string;
  Text:string;
  BigImage: string;
  Info: Array<{
    Text: string;
    Image: string;
    Link: string;
  }>
}

  /*const res = await fetch("http://localhost:3000/api/projects")
  const data = await res.json()
  console.log(data)*/

const page = async ({params}: {params: Promise<{ id:string }>}) => {
  const id = (await params).id

  const supabase = createClient();

  const { data, error } = await supabase
          .from('Adobe projects')
          .select()
          .eq('Program', id)
          .order('id', { ascending: true})
  

  return (
    <>
    <section>
      {data?.map((project: Project) => (<ComponentSelctor key={project?.id} project={project}/>))}
    </section>
    </>
  )
}
export default page
