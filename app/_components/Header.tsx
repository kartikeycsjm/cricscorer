import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[80px] fixed top-0 flex justify-between items-center border'>
      <h1 className='ml-4 text-[40px] text-[#000625]'>CricScorer</h1>
      <button className='text-[12px] mr-3 border p-1 rounded border-blue-900'>old matches</button>
    </div>
  )
}

export default Header