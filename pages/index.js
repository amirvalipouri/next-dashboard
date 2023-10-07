import { useMemo, useState } from 'react'
import styles from '../styles/Home.module.css'
import DashboardPage from '../components/templates/dashboardPage'

export default function Home() {

  return (
    <DashboardPage/>
  )
}

Home.Layout = "User"
