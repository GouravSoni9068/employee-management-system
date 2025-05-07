import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashBoard = () => {
  return (
    <div className='h-full w-full p-4'>
      <Header />
      <CreateTask />
      <AllTask />

    </div>
  )
}

export default AdminDashBoard
