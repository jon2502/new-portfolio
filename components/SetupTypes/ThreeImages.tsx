import React from 'react'

const ThreeImages = ({project}: {project:any}) => {
  const {Title, Text, Info} = project

  type Card = {
  Text: string;
  Image: String;
  }
  
  return (
    <section>
      <h1>{Title}</h1>
      <p>{Text}</p>
      <div>
        {Info.map((card:Card) =>(
          <div key={card.Text}>
            <p>{card.Text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ThreeImages