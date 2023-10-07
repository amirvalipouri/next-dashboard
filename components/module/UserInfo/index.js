import Image from 'next/image'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import ProgressBar from '../../element/ProgressBar'

const UserInfo = ({
  name = "",
  country = "",
  src = null ,
  social = [],
}) => {
  
  return (
    <div className="w-100 min-h-[294px] flex flex-col justify-between h-auto bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center w-100">
          <div className="flex items-center">
            <Image src={src} alt='user image' />
            <div className="mx-2">
              <p className="text-black text-xl">{name}</p>
              <p className="text-sm text-gray-500">{country}</p>
            </div>
          </div>
          <BsThreeDots color="gray"/>
        </div>
        <div>
          {social?.map((item) =>
            <ProgressBar key={item.title} {...item} />
          )}
        </div>
    </div>
  )
}

export default UserInfo