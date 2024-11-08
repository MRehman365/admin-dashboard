import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaChartLine, FaCog, FaUsers, FaTimes } from 'react-icons/fa';
import './layout.css'
import { MdDashboard } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaCreditCard } from "react-icons/fa6";
import { BiSolidBank } from "react-icons/bi";
import { ImMenu } from "react-icons/im";
import { HiDocumentReport } from "react-icons/hi";
import { FaGift } from "react-icons/fa6";
import { RiLogoutBoxFill } from "react-icons/ri";

const Sidebar = ({ isOpen, isMinimized, toggleSidebar, toggleMinimize }) => {
  return (
    <div
    className={`sidebar fixed z-20 h-[100vh] overflow-auto bg-gray-800 text-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${
      isMinimized ? 'w-12 transition-transform duration-300' : 'w-64'
    } md:relative md:translate-x-0  md:${isMinimized ? 'w-20' : 'w-64'}`}
  >
      <div className="flex items-center justify-between p-4">
        <h1 className={`text-xl font-bold ${isMinimized && 'hidden'}`}>Dashboard V5</h1>
        <button className="md:hidden" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <button className="hidden" onClick={toggleMinimize}>
          <FaBars />
        </button>
      </div>
      <ul className="mt-4 space-y-1">
        <li>
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700">
          <MdDashboard size={22} />
            {!isMinimized && <span className="ml-2">Wingo</span>}
          </Link>
        </li>
        <li>
          <Link to="/5d" className="flex items-center p-2 hover:bg-gray-700">
          <MdDashboard size={22}/>
            {!isMinimized && <span className="ml-2">5D</span>}
          </Link>
        </li>
        <li>
          <Link to="/k3" className="flex items-center p-2 hover:bg-gray-700">
          <MdDashboard size={22}/>
            {!isMinimized && <span className="ml-2">K3</span>}
          </Link>
        </li>
        <li>
          <Link to="/members" className="flex items-center p-2 hover:bg-gray-700">
          <IoPersonCircle size={22}/>
            {!isMinimized && <span className="ml-2">Members</span>}
          </Link>
        </li>
        <li>
          <Link to="/agents" className="flex items-center p-2 hover:bg-gray-700">
          <FaPeopleGroup size={22}/>
            {!isMinimized && <span className="ml-2">Agents</span>}
          </Link>
        </li>
        <li>
          <Link to="/salery" className="flex items-center p-2 hover:bg-gray-700">
            <FaPeopleGroup size={22}/>
            {!isMinimized && <span className="ml-2">Created Salery</span>}
          </Link>
        </li>
        <li>
          <Link to="/level" className="flex items-center p-2 hover:bg-gray-700">
            <FaPeopleGroup size={22}/>
            {!isMinimized && <span className="ml-2">Level Setting</span>}
          </Link>
        </li>
        <li>
          <Link to="/business" className="flex items-center p-2 hover:bg-gray-700">
          <DiGoogleAnalytics size={22}/>
            {!isMinimized && <span className="ml-2"> Business Manage</span>}
          </Link>
        </li>
        <li>
          <Link to="/pendingRecharge" className="flex items-center p-2 hover:bg-gray-700">
          <FaCreditCard size={22}/>
            {!isMinimized && <span className="ml-2">Pending Recharge</span>}
          </Link>
        </li>
        <li>
          <Link to="/pendingWithdraws" className="flex items-center p-2 hover:bg-gray-700">
          <BiSolidBank size={22}/>
            {!isMinimized && <span className="ml-2">Pending Withdrawls</span>}
          </Link>
        </li>
        <li>
          <Link to="/rechargeapproved" className="flex items-center p-2 hover:bg-gray-700">
            <ImMenu size={22}/>
            {!isMinimized && <span className="ml-2">Recharge (Approved)</span>}
          </Link>
        </li>
        <li>
          <Link to="/withdrawapproved" className="flex items-center p-2 hover:bg-gray-700">
            <ImMenu size={22}/>
            {!isMinimized && <span className="ml-2">Withdrawls (Approved)</span>}
          </Link>
        </li>
        <li>
          <Link to="/turnover" className="flex items-center p-2 hover:bg-gray-700">
          <HiDocumentReport size={22} />
            {!isMinimized && <span className="ml-2"> Turnover Report</span>}
          </Link>
        </li>
        <li>
          <Link to="/bethistory" className="flex items-center p-2 hover:bg-gray-700">
            <FaGift size={22}/>
            {!isMinimized && <span className="ml-2"> Betting History</span>}
          </Link>
        </li>
        <li>
          <Link to="/giftcode" className="flex items-center p-2 hover:bg-gray-700">
            <FaGift size={22}/>
            {!isMinimized && <span className="ml-2">Create Gift Code</span>}
          </Link>
        </li>
        <li>
          <Link to="/bankupi" className="flex items-center p-2 hover:bg-gray-700">
          <BiSolidBank size={22}/>
            {!isMinimized && <span className="ml-2">Banking & UPI</span>}
          </Link>
        </li>
        <li>
          <Link to="/setting" className="flex items-center p-2 hover:bg-gray-700">
            <FaGift size={22}/>
            {!isMinimized && <span className="ml-2">Settings</span>}
          </Link>
        </li>
        <li>
          <Link to="/report" className="flex items-center p-2 hover:bg-gray-700">
            <FaGift size={22}/>
            {!isMinimized && <span className="ml-2">Today Report</span>}
          </Link>
        </li>
        <li>
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700">
          <RiLogoutBoxFill size={22}/>
            {!isMinimized && <span className="ml-2">Come Back</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
