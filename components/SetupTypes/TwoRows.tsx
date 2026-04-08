import React from 'react'

function TwoRows({Project}: {Project:Project}) {
    console.log(Project)
  return (
    <section className='flex flex-row w-full'>
        <div>
            <p>gallery</p>
        </div>
        <div>
            <p>text</p>
        </div>
    </section>
  )
}

export default TwoRows