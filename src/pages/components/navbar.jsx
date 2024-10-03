import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigation = useNavigate()
  return (
    <div className='w-full flex items-center justify-between p-7'>
        <div className="logo font-bold text-lg">Coffekuu</div>
        <div className="navigasi flex items-center justify-center gap-x-8 list-none">
            <li>Home</li>
            <li>Product</li>
            <li>YourCart</li>
            <li>History</li>
        </div>
        <div className="authentikasi flex items-center gap-x-4">
            <button onClick={()=>{
                navigation("/signin")
            }} className='p-8 py-2 items-center justify-center shadow-md rounded-3xl'>Sign In</button>
            <div onClick={()=>{
                navigation("/signup")
            }}className='p-8 py-2 cursor-pointer items-center justify-center bg-red-950 text-white rounded-3xl'>Sign Up</div>
        </div>
        </div>
  )
}

export default Navbar
