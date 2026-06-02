'use client';

import Link from 'next/link';

export default function Navbar() {
    function closeNavMenu() {
        document.activeElement.blur();
    }

    return (
        <div className='text-base-content flex justify-center'>
            <nav className='3xl:px-2 container'>
                <div className='navbar'>
                    <div className='navbar-start'>
                        <div className='dropdown'>
                            <div
                                tabIndex='0'
                                role='button'
                                className='btn btn-ghost btn-square md:hidden'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    className='inline-block h-7 w-7 stroke-current'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    ></path>
                                </svg>
                            </div>
                            <ul
                                tabIndex='-1'
                                className='menu menu-sm dropdown-content bg-base-300 rounded-box text-base-content z-1 mt-3 w-32 p-2 shadow'
                            >
                                <li>
                                    <Link href='/' onClick={closeNavMenu}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/about' onClick={closeNavMenu}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/projects'
                                        onClick={closeNavMenu}
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='?modal=open'
                                        scroll={false}
                                        className='btn btn-xs btn-soft btn-primary md:pl-0'
                                        onClick={closeNavMenu}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link
                            href='/'
                            className='btn btn-link text-primary-content text-xl no-underline md:pl-0'
                        >
                            Nick Edwards
                        </Link>
                    </div>
                    <div className='navbar-end hidden md:flex'>
                        <ul className='menu menu-horizontal px-1 lg:gap-2'>
                            <li>
                                <Link href='/'>Home</Link>
                            </li>
                            <li>
                                <Link href='/about'>About</Link>
                            </li>
                            <li>
                                <Link href='/projects'>Projects</Link>
                            </li>
                            <li>
                                <Link
                                    href='?modal=open'
                                    scroll={false}
                                    className='btn btn-sm btn-outline btn-primary'
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
