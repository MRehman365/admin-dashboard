import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaChartLine, FaCog, FaUsers, FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, isMinimized, toggleSidebar, toggleMinimize }) => {
  return (
    <div className={`sidebar fixed z-20 h-[100vh] overflow-auto bg-gray-800 text-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${isMinimized ? 'w-20' : 'w-64'} md:relative md:translate-x-0 md:${isMinimized ? 'w-20' : 'w-64'}`}>
      <div className="flex items-center justify-between p-4">
        <h1 className={`text-xl font-bold ${isMinimized && 'hidden'}`}>Dashboard V5</h1>
        <button className="md:hidden" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <button className="hidden" onClick={toggleMinimize}>
          <FaBars />
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        <li>
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700">
            <FaChartLine />
            {!isMinimized && <span className="ml-4">Wingo</span>}
          </Link>
        </li>
        <li>
          <Link to="/5d" className="flex items-center p-2 hover:bg-gray-700">
            <FaUsers />
            {!isMinimized && <span className="ml-4">5D</span>}
          </Link>
        </li>
        <li>
          <Link to="/k3" className="flex items-center p-2 hover:bg-gray-700">
            <FaCog />
            {!isMinimized && <span className="ml-4">K3</span>}
          </Link>
        </li>
        <li>
          <Link to="/members" className="flex items-center p-2 hover:bg-gray-700">
            <FaCog />
            {!isMinimized && <span className="ml-4">Members</span>}
          </Link>
        </li>
        <li>
          <Link to="/agents" className="flex items-center p-2 hover:bg-gray-700">
            <FaCog />
            {!isMinimized && <span className="ml-4">Agents</span>}
          </Link>
        </li>
        <li>
          <Link to="/salery" className="flex items-center p-2 hover:bg-gray-700">
            <FaCog />
            {!isMinimized && <span className="ml-4">Created Salery</span>}
          </Link>
        </li>
        <li>
          <Link to="/level" className="flex items-center p-2 hover:bg-gray-700">
            <FaCog />
            {!isMinimized && <span className="ml-4">Level Setting</span>}
          </Link>
        </li>
        <li>
          <Link to="/business" className="flex items-center p-2 hover:bg-gray-700">
            <FaCog />
            {!isMinimized && <span className="ml-4"> Business Manage</span>}
          </Link>
        </li>
        <li>
          <Link to="/pendingRecharge" className="flex items-center p-2 hover:bg-gray-700">
            <FaCog />
            {!isMinimized && <span className="ml-4">Pending Recharge</span>}
          </Link>
        </li>
        <li>
          <Link to="/pendingWithdraws" className="flex items-center p-2 hover:bg-gray-700">
            <FaCog />
            {!isMinimized && <span className="ml-4">Pending Withdrawls</span>}
          </Link>
        </li>
        <li>
          <Link to="/rechargeapproved" className="flex items-center p-2 hover:bg-gray-700">
            <FaCog />
            {!isMinimized && <span className="ml-4">Recharge (Approved)</span>}
          </Link>
        </li>
        <li>
          <Link to="/withdrawapproved" className="flex items-center p-2 hover:bg-gray-700">
            <FaCog />
            {!isMinimized && <span className="ml-4">Withdrawls (Approved)</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
