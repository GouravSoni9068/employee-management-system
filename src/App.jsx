import React from 'react'
import Login from './components/auth/Login'
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard'
import AdminDashBoard from './components/Dashboard/AdminDashBoard'

const App = () => {
  return (
    <div>
      {/* <Login/> */}
      {/* <EmployeeDashBoard/> */}
      <AdminDashBoard />
    </div>
  )
}

export default App
