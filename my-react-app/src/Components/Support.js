import React from 'react'
import { HiCpuChip,HiMiniPhone } from "react-icons/hi2";
import { HiSupport,HiOutlineArrowNarrowRight } from "react-icons/hi";
import  supportImg from '../assests/support.jpg'

const Support = () => {
  return (
    <div className='w-full  mt-24'>
      <div className=' absolute  w-full h-[700px] bg-gray-700/90'>
        <img  className=' w-full h-full object-cover mix-blend-overlay 'src={supportImg}>
        </img>
        </div>
        <div className='mx-auto text-white max-w-[1240px] relative'>
          <div className='px-4 py-12'>
            <h1 className='pt-8 text-center text-3xl text-slate-900 font-semibold uppercase'> Support</h1>
            <h3 className='text-center text-5xl py-6 font-bold'> Finding theright team</h3>
            <p className='text-slate-300 text-2xl py-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer vitae velit sit amet ipsum condimentum mattis. Duis at lacus quis nibh consectetur efficitur. Sed eget sapien ut diam vulputate consectetur.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <HiMiniPhone className=' h-12 w-16 text-white bg-indigo-500 rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Sales</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contact Us <HiOutlineArrowNarrowRight className='w-5 ml-2' /></p>
                  </div>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <HiCpuChip className=' h-12 w-16 text-white bg-indigo-500 rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contact Us <HiOutlineArrowNarrowRight className='w-5 ml-2' /></p>
                  </div>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <HiSupport className=' h-12 w-16 text-white bg-indigo-500 rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Media Inqueries</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>Contact Us <HiOutlineArrowNarrowRight className='w-5 ml-2' /></p>
                  </div>
                  
              </div>
          <div>
            {/* <p>Contact us <HiOutlineArrowNarrowRight/> </p> */}
          </div>
        </div>

    </div>
  )
}

export default Support