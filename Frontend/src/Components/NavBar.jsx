import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaSignOutAlt, FaBell } from 'react-icons/fa';
import { ImArrowDownRight } from "react-icons/im";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasUnreadMessages, setHasUnreadMessages] = useState(true);
  const modalRef = useRef(null);

  const handleNotificationClick = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      setHasUnreadMessages(false); // Clear unread messages when closing modal
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex justify-between items-center bg-gray-900 p-4 shadow-lg'>
      <div className='text-white text-xl font-bold'>Asset Sphere</div>
      <div className='flex items-center gap-4 relative'>
        <div className='relative'>
          <FaBell className='text-white text-xl cursor-pointer' onClick={handleNotificationClick} />
          {hasUnreadMessages && (
            <div className='absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 rounded-full w-3 h-3'></div>
          )}
        </div>
        {isModalOpen && (
          <div ref={modalRef} className="absolute bg-white p-4 rounded w-64 shadow-lg mt-10 right-30 top-0">
            <h2 className="text-xl font-bold mb-4">Messages</h2>
            <div className='flex gap-3 text-red-500 items-center'>
              <FaBell />
              <p className='text-red-500 font-semibold'>Sahil Raised A Ticket.</p>
            </div>
            <hr />
            <div className='flex gap-3 text-green-500 items-center'>
              <ImArrowDownRight />
              <p className='text-green-500'>Durgesh's Issue Solved</p>
            </div>
          </div>
        )}
        <div className='flex items-center gap-2'>
          <FaUser className='text-white text-xl' />
          <span className='text-white'>Susanta Swain</span>
        </div>
        <div className='flex items-center gap-2 cursor-pointer'>
          <FaSignOutAlt className='text-white text-xl' />
          <span className='text-white'>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
