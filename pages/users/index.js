import React from 'react'
import userData from '../../fakeData/userData'
import ProgressBar from '../../components/element/ProgressBar'
import UserInfo from '../../components/module/UserInfo'
import { motion } from 'framer-motion'
import OutdorAds from '../../components/module/OutdorAds'
import Piechart from '../../components/element/PieChart'
import { UserBar } from '../../components/element/BarChart/UserBar'
const Users = () => {

  const data = [
    {
      label: "50%",
      title: "Instagram",
      data: [{ name: 'Group A', value: 50 }, { name: 'Group A', value: 50 },],
      COLORS: ["#4339F2", "#DAD7FE"]
    },
    {
      label: "15%",
      title: "Facebook",
      data: [{ name: 'Group b', value: 15 },
      { name: 'Group b', value: 75 },],
      COLORS: ["#FF3A29", "#FFE5D3"]
    },
    {
      label: "70%",
      title: "Twitter",
      data: [{ name: 'Group c', value: 70 }, { name: 'Group c', value: 30 },],
      COLORS: ["#34B53A", "#E2FBD7"]
    },
    {
      label: "30%",
      title: "Behance",
      data: [{ name: 'Group d', value: 30 }, { name: 'Group d', value: 70 }],
      COLORS: ["#02A0FC", "#CCF8FE"]
    },
  ]
  return (
    <div className="container">
      <p className="text-black text-xl lg:text-4xl">Be Single Minded</p>
      <div className="grid grid-cols-3 gap-4 my-4">
        {userData.map((item, index) =>
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            whileHover={{ x: index == 2 && -50, scale: 1.2 }}

            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="col-span-4 lg:col-span-1" key={item.name}>
            <UserInfo {...item} />
          </motion.div>
        )}
      </div>
      <div className="grid grid-cols-3 mt-2 gap-4">
        <div className="col-span-3 lg:col-span-2">
          <OutdorAds />
          <div className='grid grid-cols-4 gap-4 mt-2'>
            {data.map((e) =>
              <div key={e.title} className="col-span-4 lg:col-span-1 bg-white rounded-lg shadow">
                <p className='text-center text-black mt-2'>{e.title}</p>
                <Piechart {...e} />
              </div>
            )}
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 bg-white shadow rounded-lg">
            <UserBar />
        </div>
      </div>
    </div>
  )
}

export default Users

Users.Layout = "User"