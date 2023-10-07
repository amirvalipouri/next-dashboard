import React from 'react'
import { FireBarChart } from '../../element/BarChart/FireBarChart'
import fire1 from '../../../assets/dashboard/fire/fire1.svg'
import fire2 from '../../../assets/dashboard/fire/fire2.svg'
import fire3 from '../../../assets/dashboard/fire/fire3.svg'
import fire4 from '../../../assets/dashboard/fire/fire4.svg'
import fire5 from '../../../assets/dashboard/fire/fire5.svg'
import Image from 'next/image'
import ProgressBar from '../../element/ProgressBar'
import { motion } from 'framer-motion'

const FirePage = () => {
    const fakeData = [
        {
            title: "Chris Newton",
            content: "Comets are a big source of meteoroids.",
            score: 40,
            color: "green",
            src: fire1
        },
        {
            title: "Blanche Malone",
            content: "Comets are a big source of meteoroids.",
            score: 56,
            color: "red",
            src: fire2
        },
        {
            title: "Eunice Wilkins",
            content: "Comets are a big source of meteoroids.",
            score: 40,
            color: "blue",
            src: fire3
        },
        {
            title: "Phillip George",
            content: "Comets are a big source of meteoroids.",
            score: 40,
            color: "purple",
            src: fire4
        },
        {
            title: "Birdie Potter",
            content: "Comets are a big source of meteoroids.",
            score: 40,
            color: "yellow",
            src: fire5
        },
    ]
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
        hidden: { x : 20 , opacity: 0 },
        visible: {
        x:0,
          opacity: 1
        }
      };
    return (
        <div className="w-100 grid grid-cols-4 gap-4">
            <div className='col-span-4 lg:col-span-3 bg-white shadow rounded-lg p-4 h-[100vh] lg:h-[665px] '>
                <p className="text-black text-xl my-2">How To Look Up</p>
                <FireBarChart />
            </div>
            <motion.div variants={container}
                initial="hidden"
                animate="visible" className='col-span-4 lg:col-span-1 h-[670px]'>
                {fakeData.map((e) =>
                    <motion.div key={e.title} variants={item} className="bg-white shadow rounded-lg px-4 py-2 flex items-start mb-2">
                        <Image src={e.src} alt={e.title} />
                        <div className='mx-2'>
                            <p className='text-black text-lg'>{e.title}</p>
                            <p className='text-gray-500 text-sm'>{e.content}</p>
                            <ProgressBar score={e.score} color={e.color} />
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div >
    )
}

export default FirePage