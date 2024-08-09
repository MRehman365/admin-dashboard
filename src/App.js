import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Dashboard/Layout/Sidebar';
import TopBar from './Dashboard/Layout/Topbar';
import './index.css';
import Wingo from './Dashboard/Pages/Wingo';
import D from './Dashboard/Pages/5D';
import K3 from './Dashboard/Pages/K3';
import Member from './Dashboard/Members/Member';
import Agent from './Dashboard/Agents/Agent';
import CreatedSalery from './Dashboard/Pages/CreatedSalery';
import LevelSetting from './Dashboard/Pages/LevelSetting';
import Loader from './Dashboard/Pages/Loader';
import BusnesMange from './Dashboard/Pages/BusnesMange';
import PendingRecharge from './Dashboard/Pages/PendingRecharge';
import PendingWithdraws from './Dashboard/Pages/PendingWithdraws';
import RechargeApproved from './Dashboard/Pages/RechargeApproved';
import WithdrawalApproved from './Dashboard/Pages/WithdrawalApproved';
import Turnover from './Dashboard/Pages/Turnover';
import BettingHistory from './Dashboard/Pages/BettingHistory';
import GiftCode from './Dashboard/Pages/GiftCode';
import Setting from './Dashboard/Pages/Setting';
import Profile from './Dashboard/Members/Profile';
import AgentProfile from './Dashboard/Agents/AgentProfile';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMinimize = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  const handleOutsideClick = (e) => {
    if (isSidebarOpen && !e.target.closest('.sidebar') && !e.target.closest('.topbar-button')) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Simulate loading data for 1 second (1000ms)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#454d55]">
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <div className="flex relative" onClick={handleOutsideClick}>
            <Sidebar
              isOpen={isSidebarOpen}
              isMinimized={isSidebarMinimized}
              toggleSidebar={toggleSidebar}
              toggleMinimize={toggleMinimize}
            />
            <div className={`flex flex-col h-[100vh] overflow-x-hidden overflow-y-auto w-full min-h-screen transition-all duration-300`}>
              <TopBar
                toggleSidebar={toggleSidebar}
                toggleMinimize={toggleMinimize}
                isSidebarMinimized={isSidebarMinimized}
              />
              <div className="p-4">
                <Routes>
                  <Route path="/" element={<Wingo />} />
                  <Route path="/5d" element={<D />} />
                  <Route path="/k3" element={<K3 />} />
                  <Route path="/members" element={<Member />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/agents" element={<Agent />} />
                  <Route path="/agentprofile" element={<AgentProfile/>} />
                  <Route path="/salery" element={<CreatedSalery />} />
                  <Route path="/level" element={<LevelSetting />} />
                  <Route path="/business" element={<BusnesMange />} />
                  <Route path="/pendingRecharge" element={<PendingRecharge />} />
                  <Route path="/pendingWithdraws" element={<PendingWithdraws />} />
                  <Route path="/rechargeapproved" element={<RechargeApproved />} />
                  <Route path="/withdrawapproved" element={<WithdrawalApproved />} />
                  <Route path="/turnover" element={<Turnover />} />
                  <Route path="/bethistory" element={<BettingHistory />} />
                  <Route path="/giftcode" element={<GiftCode />} />
                  <Route path="/setting" element={<Setting />} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      )}
    </div>
  );
};

export default App;
