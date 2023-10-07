import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {MdArrowForwardIos} from 'react-icons/md'
const UserReceipt = ({
    name = "",
    userName = "",
    project,
    finishedProject,
    total,
    id = "",
    followers,
    src
}) => {
    const data = [
        {
            label : "project",
            value : project
        },
        {
            label : "Finished Projects",
            value : finishedProject
        },
        {
            label : "Total Profit",
            value : total
        },
        {
            label : "Followers",
            value : followers
        },
    ]
  return (
    <Link href={`purchase/${id}`} className="w-100 grid grid-cols-6 gap-4 items-center justify-between bg-white hover:bg-gray-100 py-4 px-2 my-4 rounded-xl shadow">
        <div className='flex items-center col-span-6 lg:col-span-2'>
            <Image src={src} alt='user image' />
            <div className="mx-2">
                <p className='text-lg text-black'>{name}</p>
                <p className='text-sm text-gray-700'>{userName}</p>
            </div>
        </div>
        {data?.map((e , index)=>
                <div className='col-span-3 lg:col-span-1' key={index}>
                    <p className="text-lg text-black">{e.value}</p>
                    <p className="text-sm text-gray-700">{e.label}</p>
                </div>
        )}
    </Link>
  )
}

export default UserReceipt