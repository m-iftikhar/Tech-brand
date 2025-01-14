import React from 'react'
import { FaCheck } from "react-icons/fa6";
const Pricing = () => {
  return (
    <div className='w-full text-white my-24 '>
        <div className='w-full h-[700px] absolute mix-blend-overlay bg-slate-900'> </div>
             <div className='mx-auto py-12 max-w-[1240px]'>
            <div className='text-center py-8 text-slate-300'>
                <h1 className='text-3xl uppercase'>Pricing</h1>
                <h2 className='text-5xl font-bold text-white py-8 mt-4'>
                    Right pricing for your Reesearch
                </h2>
                <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
            </div>
            <div className='grid md:grid-cols-2 '>
            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-2xl'>
                <p className='flex py-4'><FaCheck className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><FaCheck className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><FaCheck className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><FaCheck className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><FaCheck className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <button className='w-full py-4 my-4 bg-indigo-500'>Get Started</button>
            </div>
            
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-2xl'>
                <p className='flex py-4'><FaCheck className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><FaCheck className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><FaCheck className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><FaCheck className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><FaCheck className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <button className='w-full py-4 my-4 bg-indigo-500'>Get Started</button>
            </div>
            
          </div>
        </div>
        </div>
    </div>
  )
}

export default Pricing