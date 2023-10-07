import React from 'react'

const ProgressBar = ({ color = "", score = 50, title = null, number = null, }) => {
    const bg = {
        red: "bg-red-200",
        blue: "bg-blue-200",
        green: "bg-green-200",
        blue: "bg-blue-200",
        purple: "bg-purple-200",
        yellow: "bg-yellow-200",
    }
    let bgColor = bg[color]
    const bg2 = {
        red: "bg-red-600",
        blue: "bg-blue-600",
        green: "bg-green-600",
        blue: "bg-blue-600",
        purple: "bg-purple-600",
        yellow: "bg-yellow-500",
    }
    let bgColor2 = bg2[color]
    return (
        <div className="w-100 my-4">
            {(title && number) &&
                <div className="flex justify-between items-center">
                    <p className='text-black'>{title}</p>
                    <p className='text-black'>{number}</p>
                </div>
            }
            <div className={`w-full ${bgColor} rounded-full h-2.5  mt-2`}>
                <div className={`${bgColor2} h-2.5 rounded-full`} style={{ width: `${score}%` }}></div>
            </div>
        </div>
    )
}

export default ProgressBar