import React from 'react'

function Accordion({images}: {images:Array<{Image:string, Text:string}>}) {
  return (
    <div>
        <div>
            <div className='flex h-[400px]'>
                {images.map((image)=>(
                    <div key={image.Text} className='imageAcordian hover:grow-[3]'
                    style={{backgroundImage: `url(${image.Image})`}}
                    >
                        <div className='group flex items-center justify-center px-[10px] absolute top-0 right-0 bottom-0 left-0'>
                            <div className='z-1'>
                                <h2 className='invisible opacity-0 transform-3d translate-y-[-60px] transition-all duration-0 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 group-hover:duration-[0.3s] group-hover:delay-[0.3s]'>{image.Text}</h2>
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