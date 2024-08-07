'use client'
import React, { useState } from 'react'

const page = () => {
  const [overs, setOvers] = useState<number>(5)
  const [started, setStarted] = useState<boolean>(false)
  const [over, setOver] = useState<number>(0)
  const [runs, setRuns] = useState<number>(0)
  const [wickets, setWickets] = useState<number>(0)
  const selectOvers = () => {
    if (overs > 20) {
      alert('hosh me over rakho rat ho jaegi khelete khelte')
    }
    else {
      localStorage.setItem('over', JSON.stringify(over))
      setOver(overs * 6)
      setStarted(true)
    }
  }
  const single = () => {
    if (started) { 
    setRuns(runs + 1)
    setOver(over - 1)
  }
}
const double = () => {
  if(started){
  setRuns(runs + 2)
  setOver(over - 1)
  }
}
const triple = () => {
  if(started){
  setRuns(runs + 3)
  setOver(over - 1)
  }
}
const four = () => {
  if(started){
  setRuns(runs + 4)
  setOver(over - 1)
  }
}
const five = () => {
  if(started){
  setRuns(runs + 5)
  setOver(over - 1)
  }
}
const six = () => {
  if(started){
  setRuns(runs + 6)
  setOver(over - 1)
  }
}
const wicket = () => {
  if(started){
  setWickets(wickets + 1)
  setOver(over - 1)
  }
}
const extra = () => {
  if (started) { 
  setRuns(runs + 1)
  }
}
const closeGame = () => {
  localStorage.removeItem('overs')
  setOver(0)
  setOvers(0)
  setRuns(0)
  setWickets(0)
}
if (over === 1) {
  closeGame()
}
return (
  <div className='w-full h-screen flex items-center flex-col'>
    <div className='relative top-0 text-[40px]'>cricscorer</div>
    <p>Select Overs</p>
    <div id="input" className='flex'>
      <input type="number" placeholder='overs?' className='border p-2 w-[100px]'
        value={overs}
        onChange={(e) => setOvers(parseInt(e.target.value))}
      />
      <button className='bg-slate-600 p-2
        '
        onClick={selectOvers}
      >
        Start Game</button>
    </div>
    <div id="onball" className='w-[70%] h-[100px] flex justify-between items-center flex-wrap mt-9'>
      <button className='w-[80px] bg-green-300 p-1 text-[12px] text-[white] rounded'
        onClick={single}>single</button>
      <button className='w-[80px] bg-green-400 p-1 text-[12px] text-[white] rounded'
        onClick={double}>double</button>
      <button className='w-[80px] bg-green-500 p-1 text-[12px] text-[white] rounded'
        onClick={triple}>triple</button>
      <button className='w-[80px] bg-green-600 p-1 text-[12px] text-[white] rounded'
        onClick={four}>four</button>
      <button className='w-[80px] bg-green-700 p-1 text-[12px] text-[white] rounded'
        onClick={five}>five</button>
      <button className='w-[80px] bg-green-800 p-1 text-[12px] text-[white] rounded'
        onClick={six}>six</button>
      <button className='w-[80px] bg-red-900 p-1 text-[12px] text-[white] rounded'
        onClick={wicket}>wicket</button>
      <button className='w-[80px] bg-green-900 p-1 text-[12px] text-[white] rounded'
        onClick={extra}>wide or nb</button>
    </div>
    <div id="lekhajokha">
    </div>
    {
      started && (
        <div id="report">
          <h1>Runs:{runs}</h1>
          <h1>Wicket:{wickets}</h1>
          <h1>Balls left:{over}</h1>
        </div>)
    }
    <button className='bg-blue-600 p-2 rounded m-8' onClick={closeGame}>Close the Game</button>
  </div>
)
}

export default page