import Image from 'next/image'
import React from 'react'
import main from '../../../assets/dashboard/main/main.png'
import DashboardPie from '../../element/PieChart/DashboardPie'
import DashboardLineChart from '../../element/LineChart/DashboardLineChart'
import DashboardPieChart2 from '../../element/PieChart/DashboardPieChart2'
import ProgressBar from '../../element/ProgressBar'
const DashboardPage = () => {
    const fakeData = [
        {
            title: "Instagram",
            number: 5000,
            score: 56,
            color: "red"
        },
        {
            title: "Facebook",
            number: 5000,
            score: 56,
            color: "blue"
        },
        {
            title: "Twitter",
            number: 5000,
            score: 56,
            color: "green"
        },
        {
            title: "bihance",
            number: 5000,
            score: 56,
            color: "purple"
        },
    ]
    const pie1 = [
        {
            data: [{ name: "a", value: 53 }, { name: "b", value: 47 }],
            COLORS: ['#0088FE', '#00C49F'],
            label: "53%"
        }
    ]
    const pie2 = [
        {
            data: [{ name: "a", value: 40 }, { name: "b", value: 60 }],
            COLORS: ['#0088FE', '#00C49F'],
            label: "40%"
        }
    ]
    return (
        <div className="w-100">
            <div className="flex items-center flex-col">
                <Image src={main} alt='main picture' />
                <p className="text-black text-4xl text-center my-2">Every large design company whether it’s <br /> a multi-national branding</p>
                <p className="text-center text-sm text-gray-500">Every large design company whether it’s a multi-national branding <br /> corporation or a regular down at heel tatty magazine publisher needs to <br /> fill holes in the workforce.</p>
                <button className="my-4 bg-blue-800 hover:bg-blue-700 rounded-lg text-sm px-4 py-2">start for Free</button>
            </div>
            <div className="w-100 grid grid-cols-4 gap-4">
                <div className='bg-white rounded-xl shadow col-span-4 lg:col-span-1 h-[400px] p-4'>
                    <p className="text-black text-lg">Text</p>
                    {pie2.map((e, index) => <DashboardPie {...e} key={index + 1} />)}
                </div>
                <div className='bg-white rounded-xl shadow col-span-4 lg:col-span-1'>
                    <DashboardLineChart />
                </div>
                <div className='bg-white rounded-xl shadow col-span-4 lg:col-span-1 h-[400px] p-4'>
                    <p className="text-black text-lg">Text</p>
                    {pie1.map((e, index) => <DashboardPieChart2 key={index} {...e} />)}
                </div>
                <div className='bg-white rounded-xl shadow col-span-4 lg:col-span-1 p-4'>
                    <p className="text-black text-lg">Text</p>
                    <p className="text-gray-500 text-sm ">Every large design company whether it’s a multi-national branding.</p>
                    {fakeData.map((item) => <ProgressBar key={item.title} {...item} />)}
                </div>
            </div>
        </div>
    )
}

export default DashboardPage