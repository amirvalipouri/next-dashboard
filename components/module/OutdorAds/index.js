import React from 'react'

import ads from '../../../assets/dashboard/user/ads.png'
import Image from 'next/image'

const OutdorAds = () => {
    return (
        <div className="w-100 bg-blue-700 p-4 rounded-xl grid grid-cols-4">
            <div className="flex flex-wrap lg:flex-nowrap items-start col-span-4 lg:col-span-3">
                <Image src={ads} alt='ads' />
                <div className="mx-2">
                    <p className="my-2 text-xl">Creative outdoor ads</p>
                    <p className="text-sm">
                        Every large design company whether it’s a multi-national branding corporation or a regular down at heel tatty magazine publisher needs to fill holes in the workforce.
                    </p>
                </div>
            </div>
            <div className="flex items-end justify-end col-span-4 lg:col-span-1">
                <button className="bg-white rounded-lg text-black px-4 py-2 hover:bg-gray-300 my-2 text-sm">See more!</button>
            </div>
        </div>
    )
}

export default OutdorAds