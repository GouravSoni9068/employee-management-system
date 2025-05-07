import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='h-[45%] overflow-x-auto w-full mt-10 p-3 flex gap-7 flex-nowrap '>

      <div className='flex-shrink-0 w-[25%] h-[100%] bg-orange-500 rounded-xl p-4'>
        <div className='flex justify-between items-center '>
            <h3 className='bg-red-600 px-2 py-1 rounded text-sm'>Hard</h3>
            <h3 className='font-medium'>7 May 2025</h3>
        </div>
        <div>
            <h2 className='text-xl font-semibold mt-4'>Make a Youtube Video</h2>
            <h3 className='mt-2 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel, vitae possimus eaque sit odit.</h3>
        </div>
      </div>
      <div className='flex-shrink-0 w-[25%] h-[100%] bg-slate-800 rounded-xl p-4'>
        <div className='flex justify-between items-center '>
            <h3 className='bg-red-600 px-2 py-1 rounded text-sm'>Hard</h3>
            <h3 className='font-medium'>7 May 2025</h3>
        </div>
        <div>
            <h2 className='text-xl font-semibold mt-4'>Make a Youtube Video</h2>
            <h3 className='mt-2 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel, vitae possimus eaque sit odit.</h3>
        </div>
      </div>
      <div className='flex-shrink-0 w-[25%] h-[100%] bg-red-600 rounded-xl p-4'>
        <div className='flex justify-between items-center '>
            <h3 className='bg-red-600 px-2 py-1 rounded text-sm'>Hard</h3>
            <h3 className='font-medium'>7 May 2025</h3>
        </div>
        <div>
            <h2 className='text-xl font-semibold mt-4'>Make a Youtube Video</h2>
            <h3 className='mt-2 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel, vitae possimus eaque sit odit.</h3>
        </div>
      </div>
      <div className='flex-shrink-0 w-[25%] h-[100%] bg-lime-700 rounded-xl p-4'>
        <div className='flex justify-between items-center '>
            <h3 className='bg-red-600 px-2 py-1 rounded text-sm'>Hard</h3>
            <h3 className='font-medium'>7 May 2025</h3>
        </div>
        <div>
            <h2 className='text-xl font-semibold mt-4'>Make a Youtube Video</h2>
            <h3 className='mt-2 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel, vitae possimus eaque sit odit.</h3>
        </div>
      </div>
      <div className='flex-shrink-0 w-[25%] h-[100%] bg-purple-700 rounded-xl p-4'>
        <div className='flex justify-between items-center '>
            <h3 className='bg-red-600 px-2 py-1 rounded text-sm'>Hard</h3>
            <h3 className='font-medium'>7 May 2025</h3>
        </div>
        <div>
            <h2 className='text-xl font-semibold mt-4'>Make a Youtube Video</h2>
            <h3 className='mt-2 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel, vitae possimus eaque sit odit.</h3>
        </div>
      </div>

    </div>
  )
}

export default TaskList
