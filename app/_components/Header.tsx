import React from 'react'
const Header = () => {
  return (
    <div className='w-full text-[white] h-[80px] bg-[#100f0f] sticky top-0 flex justify-between items-center border'>
      <h1 className='ml-4 text-[40px]'>CricScorer</h1>
      <button className='text-[12px] mr-3 border p-1 rounded border-blue-900'>old matches</button>
    </div>
  )
}
export default Header