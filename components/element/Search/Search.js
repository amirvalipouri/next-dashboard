import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = ({value = "" , onChange = () => {}}) => {
  return (
    <div className="flex items-center p-2">
        <FiSearch color="black" />
        <input type='text' placeholder="Search" className="border-0 bg-transparent ring-0 mx-1 text-black" value={value} onChange={onChange} />
    </div>
  )
}

export default Search