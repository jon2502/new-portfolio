import Image from 'next/image'
import React from 'react'

function TwoRows({Project}: {Project:Project}) {
    console.log(Project.ImageGallery)
    const imagegallery = Project.ImageGallery
  return (
    <section className='flex max-w-[1140px] mx-auto'>
        <section className='flex flex-row items-center w-[33%] p-[10px]'>
            <div>
                <h1>gallery</h1>
                {Project.ImageGallery.length == 2 ? (
                    <section className='flex flex-row items-center'>
                        {imagegallery.map((gallery) => (
                            <div>
                               {gallery.map((image) => (
                                <Image src={image} alt="logo" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
                               ))} 
                            </div>
                        ))}
                    </section>
                ):(
                    <p>one</p>
                )}
            </div>
            <div>
                <p>text</p>
            </div>
        </section>
    </section>
  )
}

export default TwoRows