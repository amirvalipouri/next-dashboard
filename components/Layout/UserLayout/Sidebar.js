import React from 'react'

import logo from '../../../assets/logo/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import navItem from '../../../constant/_navItems'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
const Sidebar = () => {
    const router = useRouter()
    return (
        <div className="h-full bg-white rounded-tr-lg shadow  rounded-br-lg w-100 ">
            <div className="flex flex-col items-center">
                <Link href="/">
                    <Image className="mt-5" src={logo} alt="logo" />
                </Link>
                <span className="w-100 h-[2px] border-t mt-4"></span>
            </div>
            <ul className='w-100 flex flex-col items-center  '>
                {navItem.map((item) =>
                    <motion.li
                        className='my-5'
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ y: 5 }}
                        key={item.label}
                    >
                        <Link href={item.href} ><item.icons color={router.route == item.href ? "black" : "gray"} fontSize="26" /></Link>
                    </motion.li>
                )}
            </ul>
        </div>
    )
}

export default Sidebar