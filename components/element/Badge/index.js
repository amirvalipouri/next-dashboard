import React from 'react'

const Badge = ({  label = "" , color = "" }) => {
    const colors = {
        red : " bg-red-100 text-red-800 ",
        blue : " bg-blue-100 text-blue-800 ",
        yellow : " bg-yellow-100 text-yellow-800 ",
        green : " bg-green-100 text-green-800 ",
        purple : " bg-purple-100 text-purple-800 ",
    }
    const c = colors[color]
    return (
        <span className={`${c} text-sm font-medium mr-2 px-2.5 py-0.5 rounded-lg`}>{label}</span>
    )
}

export default Badge