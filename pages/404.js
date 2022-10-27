import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Error = () => {
 const router = useRouter(); 
  
  const handleInput =() =>{
    router.push("/");  // click button and go home page
  };

  useEffect(() =>{
    setTimeout(() =>{
      router.push("/home");   //automatic redirect home page
    }, 5000);
  }, []);

  return (
    <div className='errorpage'>
       <div className='backlayer'>
       <h2>404</h2>
       </div>
       <div className='errorinfo'>
        <h4>We are sorry, page not found.</h4>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the standard dummy text ever since the 1500s, on the page</p>
          {/* <Link href='/'>
          <a className='btn'>Back to Homepage</a>
          </Link> */}
          <a className='btn' onClick={handleInput}>Back to Homepage </a>
          
       </div>
    </div>
  )
}

export default Error;