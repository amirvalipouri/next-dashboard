import React from 'react'

const Range = ({ value, price = 100 }) => {
    return (
        <div className="w-100">
            <div className='w-100 flex items-center justify-between'>
                <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
                <p>${price}</p>
            </div>
            <input id="default-range" type="range" value={value} class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
        </div>
    )
}

export default Range