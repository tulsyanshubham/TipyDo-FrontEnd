import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dashboardDropdownVisible, setDashboardDropdownVisible] = useState(false);
  const [loginDropdownVisible, setLoginDropdownVisible] = useState(false);

  const toggleDashboardDropdown = () => {
    setDashboardDropdownVisible(!dashboardDropdownVisible);
    setLoginDropdownVisible(false);
  };

  const toggleLoginDropdown = () => {
    setLoginDropdownVisible(!loginDropdownVisible);
    setDashboardDropdownVisible(false);
  };

  return (
    <div className='flex justify-between items-center bg-green-50 fixed w-[100%] border-b-2 border-green-200 z-10'>
      <div>
        <Link to="/"><img className='h-12 my-3 ml-2' src="/Logo.png" alt="Logo" /></Link>
      </div>

      <div className='flex mr-5 text-lg sm:mr-20'>
        <ul className='relative'>
          <li>
            <a
              onClick={toggleDashboardDropdown}
              className='text-xl ml-2 p-2 hover:text-green-400 hover:scale-110 duration-300 cursor-pointer'
            >
              Dashboard
            </a>
            {dashboardDropdownVisible && (
              <ul className='absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg'>
                <li className='px-4 py-2 hover:bg-green-100'>
                  <Link to="/dashboard/manager" onClick={toggleDashboardDropdown}>Manager</Link>
                </li>
                <li className='px-4 py-2 hover:bg-green-100'>
                  <Link to="/dashboard/employee" onClick={toggleDashboardDropdown}>Employee</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        <ul className='relative'>
          <li>
              <a
                onClick={toggleLoginDropdown}
                className='text-xl p-2 sm:pl-6 hover:text-green-400 hover:scale-110 duration-300 cursor-pointer'
              >
                Login
              </a>
            {loginDropdownVisible && (
              <ul className='absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg'>
                <li className='px-0 sm:px-4 py-2 hover:bg-green-100'>
                  <Link to="/login/manager" onClick={toggleLoginDropdown}>Manager </Link>
                </li>
                <li className='px-4 py-2 hover:bg-green-100'>
                  <Link to="/login/employee" onClick={toggleLoginDropdown}>Employee </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
