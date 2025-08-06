import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ThreeRows = ({project}: {project:any}) => {
  const {Title, Text, Info} = project

  type Card = {
  Text: string;
  Image: String;
  Link: Url
  }
  
  return (
    <section>
      <h1>{Title}</h1>
      <p>{Text}</p>
      <div>
        {Info.map((card:Card) =>(
          <div key={card.Text}>
            <p>{card.Text}</p>
            {card.Image ? (
              <Image src="/logo.png" alt="logo" width={144} height={30} />
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
    </section>
  )
}

export default ThreeRows