import React from 'react'

import styles from './News.module.css'
import { column1, column2, column3, column4 } from '../../../fakeData/newsData'
import NewsCard from '../../element/newsCard'
import { motion } from 'framer-motion'

const NewsPage = () => {
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
        <div className={styles.NewsPage}>
            <motion.div
                className={styles.row}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={item} className={styles.column}>
                    {column1.map((e, index) =>
                        <NewsCard key={index} {...e} />
                    )}
                </motion.div>
                <motion.div variants={item}  className={styles.column}>
                    {column2.map((e, index) =>
                        <NewsCard key={index} {...e} />
                    )}
                </motion.div>
                <motion.div variants={item}  className={styles.column}>
                    {column3.map((e, index) =>
                        <NewsCard key={index} {...e} />
                    )}
                </motion.div>
                <motion.div variants={item}  className={styles.column}>
                    {column4.map((e, index) =>
                        <NewsCard key={index} {...e} />
                    )}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default NewsPage