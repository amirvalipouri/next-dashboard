import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const UserLayout = ({ children }) => {
  return (
    <div className="w-100 h-[100vh] grid grid-cols-12 gap-1">
      <div className='col-span-1 hidden lg:block lg-col-span-1'>
        <Sidebar />
      </div>
      <main className='col-span-12 lg:col-span-11 p-5'>
        <Header />
        <div className="mt-4">
          {children}
        </div>

      </main>

    </div>
  )
}

export default UserLayout