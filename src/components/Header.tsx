import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';

const Header = () => {
    const [informationOpen, setInformationOpen] = useState(false);
    const [resultsOpen, setResultsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const infoDropdownRef = useRef<HTMLDivElement>(null);
    const resultsDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (infoDropdownRef.current && !infoDropdownRef.current.contains(event.target as Node)) {
                setInformationOpen(false);
            } if (resultsDropdownRef.current && !resultsDropdownRef.current.contains(event.target as Node)) {
                setResultsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <header className="bg-westlake relative">
            <div className='max-w-5xl mx-auto py-2'>
                <div className="flex flex-row justify-between">
                    <div>
                        <Image className='w-80' src="/img/wbhs-logo.png" width={1600} height={491} alt="Westlake Logo" />
                    </div>
                    <div className='flex flex-col max-w-[41.666%] w-full'>
                        <label className='text-white text-xs' htmlFor='username'>USERNAME: {' '} <span className='text-red-500'>*</span></label>
                        <input className='w-full outline-none rounded-md p-2 border focus:border-solid focus:border-blue-400' type='text' required name='username' placeholder='Username (Required)' />
                        <label className='text-white text-xs' htmlFor='password'>PASSWORD: {' '} <span className='text-red-500'>*</span></label>
                        <div className='flex flex-row w-full'>
                            <input className='w-full outline-none rounded-l-md p-2 border focus:border-solid focus:border-blue-400' required type='password' name='password' placeholder='Password (Required)' />
                            <button className='flex-shrink bg-login text-white py-2 px-4 rounded-r-md whitespace-nowrap' type='submit'>Sign on</button>
                        </div>
                    </div>
                </div>
                <nav className='flex flex-row justify-start py-4 items-center text-white'>
                    <div className='flex space-x-4'>
                        <Link href='/'>Home</Link>
                        <Link href='/calendar'>Calendar</Link>
                        <Link href='/enrolment'>Enrolment</Link>
                        <Link href='/interviews'>Interviews</Link>
                        <Link href="/documents">Documents</Link>
                        <Link href="/help">Help</Link>
                        <div className='flex flex-row space-x-2 dropdown' ref={dropdownRef}>
                            <div className="relative" ref={infoDropdownRef}>
                                <div className="flex items-center cursor-pointer" onClick={() => setInformationOpen(!informationOpen)}>
                                    <span>Information</span>
                                    <svg className={`ml-1 h-4 w-4 transition-transform duration-300 transform ${informationOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                {informationOpen && (
                                    <div className="absolute top-full whitespace-nowrap left-0 bg-white rounded-md shadow-lg py-1">
                                        <Link href="/information/details" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Details</Link>
                                        <Link href="/information/attendance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Attendance</Link>
                                    </div>
                                )}
                            </div>
                            <div className="relative" ref={resultsDropdownRef}>
                                <div className="flex items-center cursor-pointer" onClick={() => setResultsOpen(!resultsOpen)}>
                                    <span>Results</span>
                                    <svg className={`ml-1 h-4 w-4 transition-transform duration-300 transform ${resultsOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                {resultsOpen && (
                                    <div className="absolute top-full whitespace-nowrap left-0 bg-white rounded-md shadow-lg py-1">
                                        <Link href="/results/ncea-summary" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">NCEA Summary</Link>
                                        <Link href="/results/current-year" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Current Year Results</Link>
                                        <Link href="/results/class-efforts" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Class Efforts</Link>
                                        <Link href="/results/reports" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Reports</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;