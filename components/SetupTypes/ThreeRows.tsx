
import Image from 'next/image';
import Link from 'next/link';

const ThreeRows = ({Project}: {Project:Project}) => {
  const {Title, Text, Info, BigImage} = Project

  
  return (
    <section>
      <h2 className='mb-2.5'>{Title}</h2>
      <p className='mb-5'>{Text}</p>
      <div className='container test mobiletest max-md:flex-col'>
        {Info.map((item) =>(
          <div key={item.Text} className='flex flex-col items-center w-full p-2.5'>
            <p className='text-center mb-5 h-max'>{item.Text}</p>
            {item.Image ? (
              <Image src={item.Image} alt="logo" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
            ):(
              null
            )}
            {item.Link ? (
              <button>
                <Link href={item.Link}>
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