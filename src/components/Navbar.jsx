import React, { useContext } from 'react'
import { UserStore } from '../context/UserContext'

const Navbar = () => {
  const {toggle,setToggle} = useContext(UserStore)
  return (
    <div className='bg-blue-600 p-4 flex justify-between items-center'>
      <h1>Logo</h1>
      <ul className='flex gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className='border-none bg-green-600 p-2 cursor-pointer' onClick={() => setToggle((prev) => !prev)}>{toggle ? "Close" : "Create"}</button>
    </div>
  )
}

export default Navbar