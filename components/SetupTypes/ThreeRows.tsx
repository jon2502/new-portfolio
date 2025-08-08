import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import Link from 'next/link';
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

const ThreeRows = ({project}: {project:Project}) => {
  const {Title, Text, Info, BigImage} = project

  
  return (
    <section>
      <h1>{Title}</h1>
      <p>{Text}</p>
      <div className='flex max-w-[1140px] mx-auto'>
        {Info.map((card) =>(
          <div key={card.Text} className='flex flex-col items-center w-[33%] p-[10px]'>
            <p className='text-center mb-20'>{card.Text}</p>
            {card.Image ? (
              <Image src={card.Image} alt="logo" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
            ):(
              null
            )}
            {card.Link ? (
              <button>
                <Link href={card.Link}>
                    <span>Text</span>
                </Link>
              </button>
            ):(
              null
            )}
        </div>
        ))}
      </div>
      {BigImage ? (
        <Image src={BigImage} alt="logo" width={144} height={30} />
      ):(
        null
      )}
    </section>
  )
}

export default ThreeRows