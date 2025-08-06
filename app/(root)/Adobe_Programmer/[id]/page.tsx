import ThreeImages from '@/components/SetupTypes/ThreeImages';
import { createClient } from '@/utils/supabase/client';
import React from 'react'

const page = async ({params}: {params: Promise<{ id:string }>}) => {
  const id = (await params).id

  const supabase = createClient();
  const { data, error } = await supabase
          .from('Adobe projects')
          .select()
          .eq('Program', id)
          .order('id', { ascending: true})

  const componentSelctor = ((project: any) => {
    console.log(project)
    switch(project.SetupType) {
      case "ThreeImages":
        return <ThreeImages key={project?.id} project={project}/>
    }
  })

  return (
    <>
    <section>
      {data?.map((project) => (
        <div key={project?.id}>
          {componentSelctor(project)}
        </div>
      ))}
    </section>
    </>
  )
}
export default page
