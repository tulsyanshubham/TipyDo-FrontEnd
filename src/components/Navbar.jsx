import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [logStatus, setLogStatus] = useState(false)
  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      setLogStatus(true);
    }
  }, [])
  
  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    setLogStatus(false);
    navigate('/login');
    // setTimeout(navigate('/login'), 1000);
  }

  return (
    <div className='flex justify-between items-center bg-green-50 fixed w-full border-b-2 border-green-200 z-10'>
      <div >
        <h1 className='text-5xl font-Titlefont m-1 p-2 text-green-600'>
          <Link to='/'>
          Tipp
          </Link>
        </h1>
      </div>
      <div className='flex mr-20'>
        <ul>
          <li>
            <a href="" className='text-xl p-2'>How to Tip</a>
          </li>
        </ul>

        <ul>
          <li>
            {!logStatus ? (<Link to="/login" className='text-xl p-2 pl-6' >Login</Link>) : (<a className='text-xl p-2 pl-6 cursor-pointer' onClick={handleLogout} >Logout</a>)}
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
