import Image from 'next/image';
import loginimage from '../public/loginimage.jpg';
import logo from '../public/logo.png';

export default function Home() {
  return (
    <main className='flex h-screen'>
      <div className='relative w-1/2'>
         <Image src={loginimage} alt="image of male teacher writing on a notebook" layout='fill' objectFit='cover' className='mobile:hidden desktop:block'/>
      </div>
     
      <div className='flex flex-col justify-center items-center desktop:w-1/2 mobile:w-full p-6'>
      <Image src={logo} alt="School Staff Recruitment Logo" width={200} height={100} />
       
      <input type="text" placeholder="Enter your email" className='mb-4 p-3 w-full max-w-xs border border-gray-300 rounded'/>
      <input type="password" placeholder="Enter your password" className='mb-4 p-3 w-full max-w-xs border border-gray-300 rounded'/>
      
      <button className="btn btn-wide hover:bg-test">Login</button>
      </div>
      
    </main>
  );
}
