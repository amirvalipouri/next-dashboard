import Image from 'next/image'
import React from 'react'
import Badge from '../Badge'
import new1 from '../../../assets/dashboard/news/new1.png'
import { motion } from 'framer-motion'
const NewsCard = ({ type = "news", labels = [], title = "", content = "", src  }) => {
    // const randomColor = (li) => {
    //     let arr = ["green", "blue", 'yellow', 'red', 'purple']
    //     for (let i = 0; i < li.length; i++) {
    //         const element = array[index];
            
    //     }
    //     let color = arr[(Math.floor(Math.random() * arr.length))]
    //     console.log(color)
    //     return color
    // }

    // console.log("color is : ", randomColor())
    return (
        <>
            {type === "news" ?
                <motion.div whileHover={{scale : 1.05}} transition={{duration : 0.5}}  className='bg-white shadow-lg rounded-lg min-h-[208px] flex flex-col items-center justify-between px-2 py-4'>
                    <div className="my-2 px-2">
                        {labels.map((item,index) =>
                            <Badge key={index} color={item.color} label={item.title} />
                        )}
                    </div>
                    {src !== null &&
                        <Image className="my-1" src={src} alt={title} />
                    }
                    <div className="lg:px-2">
                        <p className="text-xl text-start text-black mx-2">{title}</p>
                        <p className="text-sm text-start text-black mx-2">{content}</p>
                    </div>
                </motion.div>
            :

                <motion.div whileHover={{scale : 1.05}} transition={{duration : 0.5}}  style={{backgroundImage : `url(${new1})`}} className={`shadow-lg flex flex-col items-center justify-between rounded-lg px-2 py-4`}>
                    <div className="my-2">
                        {labels.map((item,index) =>
                            <Badge key={index} color={item.color} label={item.title} />
                        )}
                    </div>
                    <div className="lg:px-2">
                        <p className="text-xl text-start text-black mx-2">{title}</p>
                        <p className="text-sm text-start text-black mx-2">{content}</p>
                    </div>
                </motion.div>
            }
        </>
    )
}

export default NewsCard