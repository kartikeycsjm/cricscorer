import React from 'react'

const Starting = () => {
    return (
        <div className='w-[250px] border border-blue-950 h-[102px] flex justify-center items-center'>
            <div className='w-[150px] h-[100px] flex justify-center items-center flex-col'>
                <h3 className='text-[20px]'>Select Overs</h3>
                <input type="number" className='p-2 border w-[100px] h-[40px]' />
            </div>
            <button className='bg-green-600 rounded text-white w-[100px] h-[100px] border'>
                start the match
            </button>
        </div>
    )
}

export default Starting