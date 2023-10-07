import React from 'react'
import styles from './BankCard.module.css'
import mastercard from '../../../assets/dashboard/purchases/mastercard.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
const BankCard = ({name = "" , date = "" , color = ""}) => {
  const colors = {
    red : "bg-red-600",
    blue : "bg-blue-600",
    green : "bg-green-600",
  }

  let c = colors[color]
  
  return (
    <motion.div whileHover={{ scale : 1.02 , skewY : "2deg"}} className={`${styles.BankCard} shadow rounded-lg ${c} p-4 flex flex-col justify-around`}>
        <p className='text-xl'>CraftworkBank</p>
        <div className="my-4">
          <p className="text-sm">{name}</p>
          <p>4444 **** **** 1369</p>
        </div>
        <div className="flex justify-between items-center w-100">
          <p>{date}</p>
          <Image src={mastercard} alt='master card' />
        </div>
    </motion.div>
  )
}

export default BankCard