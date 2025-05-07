import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex gap-6 mt-10'>

      <div className='bg-green-800 w-[28vw] p-10 rounded-xl'>
        <div className='text-5xl font-bold mb-2'>0</div>
        <h2 className='text-2xl font-bold'>New Task</h2>
      </div>
      <div className='bg-blue-800 w-[28vw] p-10 rounded-xl'>
        <div className='text-5xl font-bold mb-2'>0</div>
        <h2 className='text-2xl font-bold'>Completed</h2>
      </div>
      <div className='bg-yellow-800 w-[28vw] p-10 rounded-xl'>
        <div className='text-5xl font-bold mb-2'>0</div>
        <h2 className='text-2xl font-bold'>Accepted</h2>
      </div>
      <div className='bg-pink-800 w-[28vw] p-10 rounded-xl'>
        <div className='text-5xl font-bold mb-2'>0</div>
        <h2 className='text-2xl font-bold'>Fail</h2>
      </div>
      
    </div>
  )
}

export default TaskListNumber
