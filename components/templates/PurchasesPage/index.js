import React from 'react'
import BankCard from '../../module/BankCard'
import { cardInfo, userPurchase } from '../../../fakeData/cardInfo'
import UserReceipt from '../../module/userReceipt'
import { motion } from 'framer-motion'
const PurchasesPage = ({

}) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <div className="w-100">
      <div className="grid grid-cols-3 gap-4">
        {cardInfo.map((item) =>
          <div className="col-span-3 lg:col-span-1" key={item.name}>
            <BankCard {...item} />
          </div>
        )}
      </div>

      <motion.div variants={container}
        initial="hidden"
        animate="visible"
        className="my-4">
        {userPurchase.map((e) =>
          <motion.div variants={item} key={e.id}>
            <UserReceipt {...e} />
          </motion.div>

        )}
      </motion.div>

    </div>
  )
}

export default PurchasesPage