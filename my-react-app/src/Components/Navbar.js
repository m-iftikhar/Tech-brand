import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Hero from './Hero'; // Importing Hero component

const Navbar = () => {
    const [nav, setNav] = React.useState(false);

    function clicked() {
        setNav(!nav);
    }

    return (
        <div className='w-screen h-[70px] bg-zinc-200 drop-shadow-lg fixed'>
            <div className='w-full h-full px-2 flex justify-between items-center'>
                <div className='flex items-center'>
                    <h1 className='text-3xl sm:text-4xl font-bold  mr-4'> Brand </h1>
                    <ul className='hidden sm:flex'>
                        <li className='px-8'>Home</li>
                        <li className='px-8'>About</li>
                        <li className='px-8'>Support</li>
                        <li className='px-8'>Platform</li>
                        <li className='px-8'>Pricing</li>
                    </ul>
                </div>
                <div className='hidden sm:flex pr-4  ml-[400px]'>
                    <button className='border border-black bg-transparent text-black rounded-md mr-6 p-2 hover:border-blue-700'>Sign in</button>
                    <button className='border-blue-500 border bg-blue-700 text-white rounded-md px-4 py-2 hover:bg-black'>Sign in</button>
                </div>
                <div className='md:hidden' onClick={clicked}> {nav ? <FiX /> : <FiMenu />} </div>
            </div>
            {nav &&
                <ul className='lg:hidden w-full text-white text-center bg-black px-8'>
                    <li className='border-b-2 border-zinc-300 w-full'>About</li>
                    <li className='border-b-2 border-zinc-300 w-full'>Support</li>
                    <li className='border-b-2 border-zinc-300 w-full'>Platform</li>
                    <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
                    <div className='flex flex-col my-4'>
                        <button className='border borde-white bg-transparent text-white rounded-md px-4 py-2 hover:border-blue-700 mb-2'>Sign in</button>
                        <button className='border-blue-500 border bg-blue-700 text-white rounded-md px-4 py-2 hover:bg-black'>Sign in</button>
                    </div>
                </ul>
            }
        </div>
    );
};

export default Navbar;
