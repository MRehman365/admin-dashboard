import React from 'react'

const Setting = () => {
  return (
    <div className='text-white'>
    <h2 className='text-2xl font-semibold'>Settings</h2>
    <div className='mt-6 bg-[#343a40] p-3 flex flex-col gap-5 rounded'>
    <h3 className='text-center font-semibold'>Increase | Drecrease For Members</h3>
    <input type="number" placeholder='Enter Account ID' className='p-2 rounded bg-[#454d55]'/>
    <select name="Function" id="function"  className='p-2 rounded bg-[#454d55]'>
        <option value=""  className='p-2 rounded'>Increase</option>
        <option value=""  className='p-2 rounded'>Decrease</option>
    </select>
    <input type="number" placeholder='Amount'  className='p-2 rounded bg-[#454d55]'/>
    <button  className='p-2 rounded bg-[#3f6791] hover:bg-[#3f6791]/80'>Submit</button>
    </div>
    {/*  */}
    
            <div className="mt-6 bg-[#343a40] p-3 flex flex-col gap-5 rounded">
              <h2 className="text-xl font-semibold mb-4 text-center">Telegram</h2>
              <div className="mb-6 flex flex-col gap-5">
                <h3 className="text-lg font-semibold">Telegram</h3>
                <input type="text" placeholder="Enter Telegram Link" className='p-2 rounded bg-[#454d55]' />
                <input type="text" placeholder="Online Services" className='p-2 rounded bg-[#454d55]' />
                <input type="text" placeholder="Enter App Link" className='p-2 rounded bg-[#454d55]' />
        
                <button className='p-2 rounded bg-[#3f6791] hover:bg-[#3f6791]/80'>Submit</button>
              </div>
            </div>
      
    </div>
  )
}

export default Setting
