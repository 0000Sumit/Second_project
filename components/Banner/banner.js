import Image from 'next/image';
import bannerpic from '../../images/pic1.jpg';


const Banner = () => {
  return (
    <div className='innerbanner-area'>
        <div className='pic-area'>
        <Image className='pic'
      src={bannerpic}
      alt="Picture of the author"
      width={1400}
      height={350}
    />
        </div>
    </div>
  )
}

export default Banner;