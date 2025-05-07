import React from 'react'

const CreateTask = () => {
  return (
    <div className='bg-zinc-900 p-7 mt-2 rounded'>
      
        <form action="" className='flex justify-between px-6'>
            <div>
                <div>
                    <h3>Task Title</h3>
                    <input type="text" placeholder='Make a UI design '/>
                </div>
                
                <div className='mt-3'>
                    <h3>Date</h3>
                    <input type="date"/>
                </div>
                <div className='mt-3'>
                    <h3>Assign To</h3>
                    <input type="text" placeholder='employee name'/>
                </div>
                <div className='mt-3'>
                    <h3>Category</h3>
                    <input type="text" placeholder='Design, Development, etc'/>
                </div>
                
            </div>
            <div className='mt-3'>
                <h3>Description</h3>
                <textarea name="" id="" cols="30" rows="10" placeholder='Detailed description of task (Max 500 words)' className='h-44'></textarea>
                <div> 
                    <button className='bg-emerald-700 w-[40vw] py-3 rounded-xl mt-5'>Create Task</button>
                </div>
            </div>
        </form>
      </div>
  )
}

export default CreateTask
