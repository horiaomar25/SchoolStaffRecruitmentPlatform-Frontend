import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';

const LoadingSigningIn = () => {
    return(
        <main className='h-screen flex justify-center items-center flex-col'>
            <Image
            src={logo}
            alt="School Staff Recruitment Logo"
            width={200}
            height={100}
            className='mb-2'
            />
            <span className="loading loading-bars loading-lg"></span>
            <h2 className='mt-4 text-lg font-semibold'>Signing In...</h2>


        </main>
    )
}

export default LoadingSigningIn;