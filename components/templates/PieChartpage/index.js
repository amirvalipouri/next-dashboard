import React from 'react'
import Barr from './Barr'
import Piee from './Pie'
import Areaa from './Areaa'
import DashboardLineChart from '../../element/LineChart/DashboardLineChart'
import { ThreeBar } from './ThreeBar'
import { motion } from 'framer-motion'
import Piechart from './Piee2'

const PieChartpage = () => {
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
        <div className="w-100">
            <p className="text-black text-2xl mb-2">Be single minded</p>
            <p className='text-gray-700 text-sm'>Every large design company whether it’s a multi-national branding</p>
            <div className='w-100 grid grid-cols-4 gap-4 my-4'>
                <motion.div whileHover={{ scale: 1.05 }} className="col-span-4 lg:col-span-1 bg-white shadow-lg rounded-lg p-4 h-[370px]">
                    <p className="text-black text-lg mx-2">Text</p>
                    <Piee />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="col-span-4 lg:col-span-1 bg-white shadow-lg rounded-lg p-4 h-[370px]">
                    <p className="text-black text-lg mx-2">Text</p>
                    <Barr />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="col-span-4 lg:col-span-1 bg-white shadow-lg rounded-lg p-4 h-[370px]">
                    <p className="text-black text-lg mx-2">Text</p>
                    <Areaa />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="col-span-4 lg:col-span-1 bg-white shadow-lg rounded-lg p-4 h-[370px]">
                    <DashboardLineChart />
                </motion.div>
            </div>
            <div className="grid grid-cols-2 gap-4 my-4">
                <motion.div whileHover={{ scale: 1.05 }} className="col-span-2 lg:col-span-1 bg-white shadow-lg rounded-lg p-4 h-[400px]">
                    <ThreeBar />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="col-span-2 lg:col-span-1 flex justify-center items-center bg-white shadow-lg rounded-lg p-4 h-[400px]">
                    <Piechart/>

                </motion.div>
            </div>
        </div>
    )
}

export default PieChartpage