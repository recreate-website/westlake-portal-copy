import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="bg-westlake relative">
            <div className='max-w-6xl'>
                <div className="flex flex-row justify-center space-x-12">
                    <div>
                        <Image className='w-80' src="/img/wbhs-logo.png" width={1600} height={491} alt="Westlake Logo" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white text-xs' htmlFor='username'>USERNAME: {' '} <span className='text-red-500'>*</span></label>
                        <input className='w-full rounded-sm py-2' type='text' required name='username' placeholder='Username (Required)' />
                        <label className='text-white text-xs' htmlFor='password'>PASSWORD: {' '} <span className='text-red-500'>*</span></label>
                        <div className='flex flex-row '>
                            <input className='flex-shrink rounded-sm py-2' required type='password' name='password' placeholder='Password (Required)' />
                            <button className='bg-login text-white py-2 px-4 rounded-r border-none' type='submit'>Sign on</button>
                        </div>
                    </div>
                </div>
                <nav className='flex flex-row justify-center items-center max-w-3xl text-white'>
                    <div className='space-x-2'>
                        <Link href='/'>Home</Link>
                        <Link href='/calendar'>Calendar</Link>
                        <Link href='/enrolment'>Enrolment</Link>
                        <Link href='/interviews'>Interviews</Link>
                        <Link href="/documents">Documents</Link>
                        <Link href="/help">Help</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;