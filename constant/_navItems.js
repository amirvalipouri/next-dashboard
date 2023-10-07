import { BiUser , BiCreditCardAlt } from 'react-icons/bi'
import { AiOutlineCloudDownload , AiOutlineFire , AiOutlinePicture } from 'react-icons/ai'
import { FiPieChart } from 'react-icons/fi'
import { CiCalendarDate } from 'react-icons/ci'
import { IoAnalyticsOutline } from 'react-icons/io'
import {FaRegNewspaper} from 'react-icons/fa'


const navItem = [
    {
        label : "Users",
        icons : BiUser,
        href : "/users"
    },
    // {
    //     label : "clouds",
    //     icons : AiOutlineCloudDownload,
    //     href : "/clouds"
    // },
    {
        label : "news",
        icons : FaRegNewspaper,
        href : "/news"
    },
    {
        label : "card",
        icons : BiCreditCardAlt,
        href : "/purchases"
    },
    // {
    //     label : "analys",
    //     icons : IoAnalyticsOutline,
    //     href : "/"
    // },
    // {
    //     label : "images",
    //     icons : AiOutlinePicture,
    //     href : "/images"
    // },
    // {
    //     label : "date",
    //     icons : CiCalendarDate,
    //     href : "/date"
    // },
    {
        label : "fire",
        icons : AiOutlineFire,
        href : "/fire"
    },
    {
        label : "pieChart",
        icons : FiPieChart,
        href : "/pieChart"
    },
]

export default navItem