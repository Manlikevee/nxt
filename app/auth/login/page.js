"use client"
import { useContext } from 'react'
import { GlobalContext } from '@/app/context/context'
const page = () => {
    const { name, setName, vee } = useContext(GlobalContext)
  return (
    <div>page logins  {vee} </div>
  )
}

export default page