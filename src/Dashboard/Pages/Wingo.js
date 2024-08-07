import React, { useState, useEffect } from "react";
import { SlBasket } from "react-icons/sl";
import './Page.css'

const bettingData = [
    { id: 1, text: "Join Red 40", time: "2024-08-07 6:44:14 AM" },
    { id: 2, text: "Join Red 1", time: "2024-08-07 6:44:14 AM" },
    { id: 3, text: "Join Red 30", time: "2024-08-07 6:44:16 AM" },
    { id: 4, text: "Join Red 10", time: "2024-08-07 6:44:17 AM" },
    { id: 5, text: "Join Red 200", time: "2024-08-07 6:44:18 AM" },
  ];
const Wingo = () => {
    const [timeLeft, setTimeLeft] = useState(60);
    const [periods, setPeriods] = useState([
      { period: '202408071102', number: 3 },
      { period: '202408071101', number: 6 },
      { period: '202408071100', number: 8 },
      { period: '202408071099', number: 5 },
      { period: '202408071098', number: 7 },
      { period: '202408071097', number: 7 },
      { period: '202408071096', number: 5 },
      { period: '202408071095', number: 7 },
      { period: '202408071094', number: 7 },
      { period: '202408071093', number: 9 },
    ]);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => (prevTime === 0 ? 60 : prevTime - 1));
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
  return (
    <div>
      <div className="bg-background p-2 rounded-lg">
          <h1 className="text-3xl font-semibold text-white mb-6">Dashboard V</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#343a40] p-4">
            <div className="bg-accent text-white border border-[#343a40] p-2 flex items-center gap-2 rounded-lg transition-transform transform hover:scale-105" 
            style={{boxShadow:"0px 0px 10px #343a99"}}>
              <p className="text-4xl  p-2 rounded bg-[#e67e22]">1M</p>
              <p className="text-sm">WinGO 1 min</p>
            </div>
            <div className="bg-accent text-white border border-[#343a40] p-2 flex items-center gap-2 rounded-lg transition-transform transform hover:scale-105" 
            style={{boxShadow:"0px 0px 10px #343a99"}}>
              <p className="text-4xl  p-2 rounded bg-[#e67e22]">3M</p>
              <p className="text-sm">WinGO 3 min</p>
            </div>
            <div className="bg-accent text-white border border-[#343a40] p-2 flex items-center gap-2 rounded-lg transition-transform transform hover:scale-105" 
            style={{boxShadow:"0px 0px 10px #343a99"}}>
              <p className="text-4xl  p-2 rounded bg-[#e67e22]">5M</p>
              <p className="text-sm">WinGO 5 min</p>
            </div>
            <div className="bg-accent text-white border border-[#343a40] p-2 flex items-center gap-2 rounded-lg transition-transform transform hover:scale-105" 
            style={{boxShadow:"0px 0px 10px #343a99"}}>
              <p className="text-4xl   p-2 rounded bg-[#e67e22]">10M</p>
              <p className="text-sm">WinGO 10 min</p>
            </div>
          </div>
        </div>

        {/* second */}
        <div className="bg-background p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div style={{boxShadow:"0px 0px 10px #343a99"}} className=" text-white p-4 rounded-lg flex gap-2 items-center bg-[#343a40]">
              <div className="text-4xl  p-3 rounded bg-red-500">
              <SlBasket />
              </div>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">Join Red</span>
                <span className="text-xl">0</span>
                </div>
              </div>
              <div style={{boxShadow:"0px 0px 10px #343a99"}} className=" text-white p-4 rounded-lg flex gap-2 items-center bg-[#343a40]">
              <div className="text-4xl  p-3 rounded bg-[#8e44ad]">
              <SlBasket />
              </div>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">Join Violet</span>
                <span className="text-xl">0</span>
                </div>
              </div>
              <div style={{boxShadow:"0px 0px 10px #343a99"}} className=" text-white p-4 rounded-lg flex gap-2 items-center bg-[#343a40]">
              <div className="text-4xl  p-3 rounded bg-[#28a745]">
              <SlBasket />
              </div>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">Join Green</span>
                <span className="text-xl">0</span>
                </div>
              </div>
              <div style={{boxShadow:"0px 0px 10px #343a99"}} className=" text-white p-4 rounded-lg flex gap-2 items-center bg-[#343a40]">
              <div className="text-4xl  p-3 rounded bg-[#17a2b8]">
              <SlBasket />
              </div>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">Total Amount</span>
                <span className="text-xl">0</span>
                </div>
              </div>
              <div style={{boxShadow:"0px 0px 10px #343a99"}} className=" text-white p-4 rounded-lg flex gap-2 items-center bg-[#343a40]">
              <p className="text-4xl  p-3 px-6 rounded bg-[#85a51a]">
              0
              </p>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">Join 0</span>
                <span className="text-xl">0</span>
                </div>
              </div>
              <div style={{boxShadow:"0px 0px 10px #343a99"}} className=" text-white p-4 rounded-lg flex gap-2 items-center bg-[#343a40]">
              <p className="text-4xl  p-3 px-6 rounded bg-[#85a51a]">
              0
              </p>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">Join 1</span>
                <span className="text-xl">0</span>
                </div>
              </div>
              <div style={{boxShadow:"0px 0px 10px #343a99"}} className=" text-white p-4 rounded-lg flex gap-2 items-center bg-[#343a40]">
              <p className="text-4xl  p-3 px-6 rounded bg-[#85a51a]">
              0
              </p>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">Join 2</span>
                <span className="text-xl">0</span>
                </div>
              </div>
              <div style={{boxShadow:"0px 0px 10px #343a99"}} className=" text-white p-4 rounded-lg flex gap-2 items-center bg-[#343a40]">
              <p className="text-4xl  p-3 px-6 rounded bg-[#85a51a]">
              0
              </p>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">Join 3</span>
                <span className="text-xl">0</span>
                </div>
              </div>
              <div style={{boxShadow:"0px 0px 10px #343a99"}} className=" text-white p-4 rounded-lg flex gap-2 items-center bg-[#343a40]">
              <p className="text-4xl  p-3 px-6 rounded bg-[#85a51a]">
              0
              </p>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">Join 0</span>
                <span className="text-xl">0</span>
                </div>
              </div>
              <div style={{boxShadow:"0px 0px 10px #343a99"}} className=" text-white p-4 rounded-lg flex gap-2 items-center bg-[#343a40]">
              <p className="text-4xl  p-3 px-6 rounded bg-[#85a51a]">
              0
              </p>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">Join 4</span>
                <span className="text-xl">0</span>
                </div>
              </div>
              <div style={{boxShadow:"0px 0px 10px #343a99"}} className=" text-white p-4 rounded-lg flex gap-2 items-center bg-[#343a40]">
              <p className="text-4xl  p-3 px-6 rounded bg-[#85a51a]">
              0
              </p>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">Join 5</span>
                <span className="text-xl">0</span>
                </div>
              </div>
              <div style={{boxShadow:"0px 0px 10px #343a99"}} className=" text-white p-4 rounded-lg flex gap-2 items-center bg-[#343a40]">
              <p className="text-4xl  p-3 px-6 rounded bg-[#85a51a]">
              0
              </p>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">Join 6</span>
                <span className="text-xl">0</span>
                </div>
              </div>
              <div style={{boxShadow:"0px 0px 10px #343a99"}} className=" text-white p-4 rounded-lg flex gap-2 items-center bg-[#343a40]">
              <p className="text-4xl  p-3 px-6 rounded bg-[#85a51a]">
              0
              </p>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">Join 7</span>
                <span className="text-xl">0</span>
                </div>
              </div>
              <div style={{boxShadow:"0px 0px 10px #343a99"}} className=" text-white p-4 rounded-lg flex gap-2 items-center bg-[#343a40]">
              <p className="text-4xl  p-3 px-6 rounded bg-[#85a51a]">
              0
              </p>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">Join 8</span>
                <span className="text-xl">0</span>
                </div>
              </div>
              <div style={{boxShadow:"0px 0px 10px #343a99"}} className=" text-white p-4 rounded-lg flex gap-2 items-center bg-[#343a40]">
              <p className="text-4xl  p-3 px-6 rounded bg-[#85a51a]">
              0
              </p>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">Join 9</span>
                <span className="text-xl">0</span>
                </div>
              </div>
              <div style={{boxShadow:"0px 0px 10px #343a99"}} className=" text-white p-4 rounded-lg flex gap-2 items-center bg-[#343a40]">
              <p className="text-4xl  p-3 px-6 rounded bg-[#85a51a]">
              0
              </p>
              <div className='flex flex-col gap-0'>
                <span className="text-lg">Join 10</span>
                <span className="text-xl">0</span>
                </div>
              </div>
            </div>

            {/* 3rd */}
            <div className='h-auto w-[100%] bg-[#343a40] p-2 text-white'>
            <h2 className='p-3 font-semibold text-lg'>Betting Statistics </h2>
            <div className=" p-4 rounded-lg shadow-lg h-[400px] overflow-hidden">
      <div className="space-y-2 animate-scroll">
        {bettingData.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-red-500 p-2 rounded-lg">
            <span className="text-white">{item.text}</span>
            <span className="text-blue-300">{item.time}</span>
          </div>
        ))}
      </div>
      </div>
    </div>

    {/* 4th */}
    <div className="bg-[#343a40] mt-5 rounded-lg">
      <div className="flex flex-col justify-center items-center mb-4 bg-[#3f6791] p-2 rounded">
      <h1 className="text-2xl font-semibold text-white mb-4">202408071103</h1>
      <div className="flex">
        <span className="text-4xl font-mono text-primary">{Math.floor(timeLeft / 60).toString().padStart(2, '0')}</span>
        <span className="text-4xl font-mono text-primary mx-2">:</span>
        <span className="text-4xl font-mono text-primary">{(timeLeft % 60).toString().padStart(2, '0')}</span>
        </div>
      </div>
      <table className="min-w-full bg-card border border-border">
        <thead>
          <tr className="bg-secondary text-white border-b-[1px]">
            <th className="py-2">Periods</th>
            <th className="py-2">Number</th>
            <th className="py-2">Big/Small</th>
            <th className="py-2">Colour</th>
          </tr>
        </thead>
        <tbody>
          {periods.map((item) => {
            const bigSmall = item.number > 5 ? 'Big' : 'Small';
            const color = item.number > 5 ? 'green' : 'red';
            return (
              <tr key={item.period} className="text-white">
                <td className="py-2 text-center">{item.period}</td>
                <td className="py-2  text-center">{item.number}</td>
                <td className="py-2  text-center">{bigSmall}</td>
                <td className="py-2  text-center">
                  <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: color }}></span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    {/* 5th */}
    <div className="bg-[#343a40] p-6 rounded-lg shadow-lg mt-6">
              <h2 className="text-xl bg-[#3f6791] p-3 text-white rounded">Adjusting the Result</h2>
              <p className="text-muted-foreground mt-2">
                <span className="text-red-500">0 (Red and White)</span> |<span className="text-green-500">5 (Green and White)</span> |<span className="text-green-500">1, 3, 7, 9 (Green)</span> |
                <span className="text-red-500">2, 4, 6, 8 (Red)</span>
              </p>
              <h3 className="text-lg font-medium text-white mt-4">
                Next Result: <span className=" text-[orange]">Random</span>
              </h3>
              <input type="text" placeholder="Enter the result (e.g., 1)" className="mt-4 p-3 bg-[#454d55] text-white border border-border rounded-md w-full focus:ring focus:ring-primary focus:outline-none" />
              <button className="text-xl bg-[#3f6791] mt-2 px-3 py-1 text-white rounded">Submit</button>
            </div>
    </div>
  )
}

export default Wingo
