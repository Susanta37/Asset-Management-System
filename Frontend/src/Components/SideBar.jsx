import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaTachometerAlt, FaCogs, FaTools, FaHistory, FaChartLine, FaTags, FaTrademark, FaTruck, FaMapMarkerAlt, FaUsers, FaBuilding, FaChartBar, FaCog, FaChevronDown, FaChevronRight } from 'react-icons/fa'; // Import FaChevronDown and FaChevronRight
import '../App.css';
import { MdAccountBalance } from "react-icons/md";

const menuItems = [
  { name: 'Dashboard', icon: <FaTachometerAlt />, path: '/' },
  { name: 'Assets', icon: <FaCogs />, path: '/assets' },
  { name: 'Components', icon: <FaTools />, path: '/components' },
  { name: 'Maintenances', icon: <FaHistory />, path: '/maintenances' },
  { name: 'Depreciations', icon: <FaChartLine />, path: '/depreciations' },
  { name: 'Asset Types', icon: <FaTags />, path: '/asset-types' },
  { name: 'Brands', icon: <FaTrademark />, path: '/brands' },
  { name: 'Suppliers', icon: <FaTruck />, path: '/suppliers' },
  { name: 'Locations', icon: <FaMapMarkerAlt />, path: '/locations' },
  { name: 'Employees', icon: <FaUsers />, path: '/employees' },
  {
    name: 'Accounts',
    icon: <MdAccountBalance />,
    path: '/accounts',
    submenu: [
      { name: 'Bank & Cash Accounts', path: '/accounts/Bank & Cash Accounts' },
      { name: 'Transactions', path: '/accounts/transactions' },
      { name: 'Transactions Categories', path: '/accounts/transactions Categories' },
      { name: 'Transactions Methods', path: '/accounts/transactions methods' },
    ]
  },
  { name: 'Departments', icon: <FaBuilding />, path: '/departments' },
  { name: 'Reports', icon: <FaChartBar />, path: '/reports' },
  { name: 'Settings', icon: <FaCog />, path: '/settings' },
];

const SideBar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Initially show sidebar
  const [submenuOpen, setSubmenuOpen] = useState({});

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSubmenu = (path) => {
    setSubmenuOpen(prevState => ({
      ...prevState,
      [path]: !prevState[path]
    }));
  };

  return (
    <div className={`md:w-64 w-full ${isSidebarOpen ? ' top-0 md:fixed md:top-0' : ' md:relative md:top-auto'}`}>
      <div className={`w-full md:w-64 bg-gray-900 text-gray-200 flex flex-col h-screen shadow-lg ${isSidebarOpen ? '' : 'hidden md:block'}`}>
        <div className="flex items-center justify-center md:justify-start h-20 border-b border-gray-700 ">
          <Link to="/"><img src={logo} alt="Logo" className="h-12 w-auto" /></Link>
        </div>
       <div className='sidebar overflow-y-auto'>
       <nav className="sidebar flex flex-col justify-center flex-1 p-4 space-y-2 ">
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <div>
                  <div
                    className={`flex items-center py-3 px-4 rounded-lg transition duration-300 ${selected === item.path ? 'bg-blue-500 text-white' : 'hover:bg-blue-700 hover:text-white'}`}
                    onClick={() => toggleSubmenu(item.path)}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className={`ml-4 md:block ${isSidebarOpen ? 'hidden' : 'block'}`}>{item.name}</span>
                    {item.submenu && (submenuOpen[item.path] ? <FaChevronDown className="ml-auto" /> : <FaChevronRight className="ml-auto" />)}
                  </div>
                  {submenuOpen[item.path] && (
                    <ul className="ml-8"> {/* Adjust the left margin for proper indentation */}
                      {item.submenu.map((subitem, subindex) => (
                        <li key={subindex} className="submenu-item">
                          <Link to={subitem.path} className={`py-2 px-4 block text-sm hover:bg-gray-800 ${selected === subitem.path ? 'text-blue-500' : 'text-gray-300'}`}>
                            {subitem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center py-3 px-4 rounded-lg transition duration-300 ${selected === item.path ? 'bg-blue-500 text-white' : 'hover:bg-blue-700 hover:text-white'}`}
                  onClick={() => setSelected(item.path)}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className={`ml-4 md:block ${isSidebarOpen ? 'hidden' : 'block'}`}>{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
       </div>
      </div>
      {/* Toggle button for small and medium screens */}
      {!isSidebarOpen && (
        <button
          className="md:hidden fixed bottom-4 right-4 bg-gray-900 text-gray-200 rounded-full p-3 shadow-lg"
          onClick={toggleSidebar}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SideBar;
