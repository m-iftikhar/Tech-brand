import React from 'react'

const About = () => {
  return (
    <div className='w-full my-32'>
        <div className=' max-w-[1240px] mx-auto mt-40'>
        <div className='text-center' >
            <h2 className='text-5xl font-bold'> Trusted by devevlopers across the world</h2>
            <p className='text-zinc-500 text-3xl py-6'> "Elevating your cloud experience with seamless management solutions."</p>
           </div>
           <div className='grid md:grid-cols-3  gap-1 px-2 text-center '>
           <div className=' border  py-8  rounded-xl shadow-xl'   >
                <p className='text-5xl text-indigo-500 font-bold'>100%</p>
                <p className='text-zinc-400 mt-2'>Completion</p>
            </div>
            <div className=' border  py-8  rounded-xl shadow-xl'   >
                <p className='text-5xl text-indigo-500 font-bold'>24/7</p>
                <p className=' text-zinc-400 mt-2 '>Deleivery</p>
            </div>
            <div className=' border py-8  rounded-xl shadow-xl'   >
                <p className='text-5xl text-indigo-500 font-bold'>100%</p>
                <p className='text-zinc400 mt-2'>Transactions</p>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default About