import React from 'react'

const AllTask = () => {
  return (
    
    <div id='allTask' className=' h-[28vh] bg-zinc-900 p-4 mt-2 rounded flex flex-col gap-3 overflow-y-scroll'>
        <div className='bg-red-500 px-10 py-3 flex justify-between rounded-lg text-lg'>
            <h3>Name</h3>
            <h3>Make a UI design</h3>
            <h3>Status</h3>
        </div>
        <div className='bg-yellow-500 px-10 py-3 flex justify-between rounded-lg text-lg'>
            <h3>Name</h3>
            <h3>Make a UI design</h3>
            <h3>Status</h3>
        </div>
        <div className='bg-green-500 px-10 py-3 flex justify-between rounded-lg text-lg'>
            <h3>Name</h3>
            <h3>Make a UI design</h3>
            <h3>Status</h3>
        </div>
        <div className='bg-pink-500 px-10 py-3 flex justify-between rounded-lg text-lg'>
            <h3>Name</h3>
            <h3>Make a UI design</h3>
            <h3>Status</h3>
        </div>
    </div>
  )
}

export default AllTask
