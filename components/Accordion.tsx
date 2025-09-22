import React from 'react'

function Accordion({images}: {images:Array<{Image:string, Text:string}>}) {
  return (
    <div>
        <div>
            <div className='flex'>
                {images.map((image)=>(
                    <div key={image.Text} className='grow shrink basis-[0%]'
                    style={{backgroundImage: `url(${image.Image})`}}
                    >
                        <div className='items-center'>
                            <div className='z-1'>
                                <h2>{image.Text}</h2>
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