import Image from 'next/image';
import loginimage from '../public/loginimage.jpg';
export default function Home() {
  return (
    <main className='flex h-screen'>
      <div className='relative w-1/2'>
         <Image src={loginimage} alt="image of male teacher writing on a notebook" layout='fill' objectFit='cover'/>
      </div>
     
      <div className='flex flex-col justify-center items-center w-1/2 p-6'>
        <h1 className='text-2xl font-semibold mb-6'>Welcome to School Staff Recruitment</h1>
      <input type="text" placeholder="Enter your email" className='mb-4 p-3 w-full max-w-xs border border-gray-300 rounded'/>
      <input type="password" placeholder="Enter your password" className='mb-4 p-3 w-full max-w-xs border border-gray-300 rounded'/>
      <button className='px-6 py-3 bg-blue-600 text-white  rounded hover:bg-blue-500 w-80'>Login</button>
      </div>
      
    </main>
  );
}
