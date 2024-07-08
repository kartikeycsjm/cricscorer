'use client'
import React, { useState } from 'react'
const Starting = () => {
    const [withPlayers, setWithPlayers] = useState(false)
    return (
        <div className='w-full min-h-screen flex items-center justify-center flex-col'>
            <div className='flex justify-around m-[30px] items-baseline w-[350px]'>
                <button className='p-1 bg-blue-500 text-[13px] text-white rounded'
                    onClick={() => setWithPlayers(true)}
                >Go with Players Name</button>
                <button className='p-1 bg-blue-500 text-[13px] text-white rounded'
                    onClick={() => setWithPlayers(false)}
                >Go without Players name</button>
            </div>
            {/* <div className='w-[300px] h-[100px] flex justify-around items-center'>
                <h3 className='text-[20px]'>Select Overs</h3>
                <input type="number" className='p-2 border w-[100px] h-[40px]' />
            </div>
            <button className='bg-green-600 rounded text-white w-[100px] h-[100px] border'>
                start the match
            </button> */}
            {
                !withPlayers &&
                <div className='border w-[90%] h-[200px] flex justify-around items-center flex-col'>
                    <div className='w-[55%] flex justify-around items-center'>
                        <h3 className='text-[15px]'>Select Overs</h3>
                        <input type="number" className='p-2 border w-[100px] h-[40px]' />
                    </div>
                    <button className='p-1 bg-green-700 text-white rounded'>Start Game</button>
                </div>
            }
            {
                withPlayers &&
                <div className='w-[90%] h-[600px] flex justify-around items-center flex-col'>
                    <div className='w-[55%] flex justify-around items-center'>
                        <h3 className='text-[15px]'>Select Overs</h3>
                        <input type="number" className='p-2 border w-[100px] h-[40px]' />
                    </div>
                    <div className='w-[100%] h-[500px] flex justify-center items-center'>
                        <div className='w-[55%] h-[90%] flex justify-around items-center flex-col'>
                            <input type="text" className='p-2 border w-[150px] h-[40px]'
                                placeholder='Team2 Name' />
                            <input type="text" className='h-[25px] p-2 border w-[100px]' />
                            <input type="text" className='h-[25px] p-2 border w-[100px]' />
                            <input type="text" className='h-[25px] p-2 border w-[100px]' />
                            <input type="text" className='h-[25px] p-2 border w-[100px]' />
                            <input type="text" className='h-[25px] p-2 border w-[100px]' />
                            <input type="text" className='h-[25px] p-2 border w-[100px]' />
                            <input type="text" className='h-[25px] p-2 border w-[100px]' />
                            <input type="text" className='h-[25px] p-2 border w-[100px]' />
                            <input type="text" className='h-[25px] p-2 border w-[100px]' />
                            <input type="text" className='h-[25px] p-2 border w-[100px]' />
                            <input type="text" className='h-[25px] p-2 border w-[100px]' />
                        </div>
                        <div className='w-[55%] h-[90%] flex justify-around items-center flex-col'>
                            <input type="text" className='p-2 border w-[150px] h-[40px]'
                                placeholder='Team2 Name' />
                            <input type="text" className='p-2 border w-[100px]  h-[25px]' />
                            <input type="text" className='p-2 border w-[100px]  h-[25px]' />
                            <input type="text" className='p-2 border w-[100px]  h-[25px]' />
                            <input type="text" className='p-2 border w-[100px]  h-[25px]' />
                            <input type="text" className='p-2 border w-[100px]  h-[25px]' />
                            <input type="text" className='p-2 border w-[100px]  h-[25px]' />
                            <input type="text" className='p-2 border w-[100px]  h-[25px]' />
                            <input type="text" className='p-2 border w-[100px]  h-[25px]' />
                            <input type="text" className='p-2 border w-[100px]  h-[25px]' />
                            <input type="text" className='p-2 border w-[100px]  h-[25px]' />
                            <input type="text" className='p-2 border w-[100px]  h-[25px]' />
                        </div>
                    </div>
                    {/* 
                    <div className='w-[55%] flex justify-around items-center'>
                        <h3 className='text-[15px]'>Team2 Name</h3>
                        <input type="number" className='p-2 border w-[100px] h-[40px]' />
                    </div> */}
                    <button className='p-1 bg-green-700 text-white rounded'>Start Game</button>
                </div>
            }
        </div>
    )
}
export default Starting