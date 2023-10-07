import React from 'react'
import Search from '../../element/Search/Search'
import user1 from '../../../assets/dashboard/user/user1.png'
import user2 from '../../../assets/dashboard/user/user2.png'
import user3 from '../../../assets/dashboard/user/user3.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <header className="w-100 flex justify-between items-center ">
            <Search />

            <div className="flex items-center">
                <motion.div
                    whileHover={{scale : 0.9}}
                >
                    <Image width="44" height="44" className='mx-1 object-cover' src={user1} alt='user image' />
                </motion.div>
                <motion.div
                    whileHover={{scale : 0.9}}
                >
                    <Image width="44" height="44" className='mx-1 object-cover' src={user3} alt='user image' />
                </motion.div>
                <motion.div
                    whileHover={{scale : 0.9}}
                >
                    <Image width="44" height="44" className='mx-1 object-cover' src={user2} alt='user image' />
                </motion.div>
                <motion.button whileTap={{scale : 0.8}} whileHover={{scale : 1.05}} className='bg-purple-500 text-white text-xl rounded-full w-[44px] h-[44px]'>+</motion.button>
            </div>

        </header>
    )
}

export default Header