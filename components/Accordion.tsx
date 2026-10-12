import React from 'react'

function Accordion({Images}: {Images:Array<{Image:string, Text:string}>}) {
  return (
    <div>
        <div>
            <div className='flex h-100 max-md:flex-col'>
                {Images.map((Image)=>(
                    <div key={Image.Text} className='imageAccordian hover:grow-3'
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
                            url(${Image.Image})`}}>
                        <div className='group flex items-center justify-center px-2.5 absolute top-0 right-0 bottom-0 left-0'>
                            <div className='z-1'>
                                <h2 className='invisible opacity-0 transform-3d translate-y-15 transition-all duration-0 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 group-hover:duration-300 group-hover:delay-300'>{Image.Text}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Accordion