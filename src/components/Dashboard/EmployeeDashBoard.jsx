import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashBoard = () => {
  return (
    <div className='p-10 bg-[#191919] h-screen'>
        <Header />
        <TaskListNumber />
        <TaskList />

    </div>

  )
}

export default EmployeeDashBoard
