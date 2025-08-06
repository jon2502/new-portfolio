import { createClient } from '@/utils/supabase/client';
import React from 'react'

const page =  async ({params}: {params: Promise<{ id:string }>}) => {
  const id = (await params).id
  return (
    <div>page {id}</div>
  )
}

export default page