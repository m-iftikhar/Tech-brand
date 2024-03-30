import React from 'react';
 import bgpic from '../assests/image.png'
 import { HiCloudArrowDown,HiPaperAirplane } from "react-icons/hi2"
 import { HiDatabase } from "react-icons/hi";
 import { LuServer } from "react-icons/lu";

const Hero = () => {
  return (
    <div className='w-ful bg-zinc-200 flex flex-col justify-between '>
        <div className='grid md:grid-cols-2 m-auto max-w-[1240px] mt-20'>
            <div className='flex flex-col md:items-start justify-center w-full px-2 py-8'>
            <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='md:text-7xl text-5xl font-bold py-3'>Cloud Management</h1>
                <p className='text-2xl'>This is our Tech brand.</p>
                <button className='py-3 px-6  md:w-[60%] my-4 border-blue-500 border bg-indigo-700 text-white
                rounded-md'>Get Started</button>
                
            </div>
               <div>
               <img src={bgpic} className='w-full'></img>
               </div>
               <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <h1 className='font-bold'>Data Services</h1>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'>< HiCloudArrowDown className='h-6 text-indigo-600' /> App Security</p>
                    <p className='flex px-4 py-2 text-slate-500'><HiDatabase className='h-6 text-indigo-600' /> Dashboard Design</p>
                    <p className='flex px-4 py-2 text-slate-500'><LuServer className='h-6 text-indigo-600' /> Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-500'>< HiPaperAirplane className='h-6 text-indigo-600' /> API</p>
                </div>
            </div>
        </div>
    
    </div>
  );
};

export default Hero;
