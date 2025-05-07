import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-end'>
            <div>
                <h2 className='text-xl'>Hello</h2>
                <h1 className='text-3xl'>Name👋</h1>
            </div>
            <button className='px-3 py-1 text-xl rounded bg-red-600'>Log Out</button>
    </div>
  )
}

export default Header
