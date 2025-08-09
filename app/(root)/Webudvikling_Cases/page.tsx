
import { FetchAll } from '@/utils/supabase/connections/fetchAll';
import React from 'react'

const page = async() => {
  const data = await FetchAll('Adobe programs')
  return (
    <div>page</div>
  )
}

export default page