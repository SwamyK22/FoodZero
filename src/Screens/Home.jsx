import React from 'react'

function Home() {
  return (
    <div>
      <div className='h-screen bg-[#233000]'>
        <div className='sm:p-28 p-5 flex'>
          <div className='z-20'>
          <h1 className='text-white w-[85%] sm:text-8xl text-2xl sm:h-[100%] h-[70%]'>Healthy Eating is important part  of lifestyle</h1>
            <p className='text-white sm:w-[60%] text-xs w-44'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, minus!</p>
            <p className='absolute pt-10 left-0 text-white rotate-90'>scroll-------------------</p>
          </div>
        <img alt='' className='absolute sm:left-[58%] left-44  sm:top-52 sm:h-96 sm:w-72 h-32 w-32' src={require('../assets/Image.png')} />
        </div>
        <div className='flex absolute sm:left-[48%] sm:top-[85%] sm:w-80 right-4 top-40 space-x-5'>
          <img alt="" className='sm:h-24 sm:w-24 h-8 w-8' src={require('../assets/spices1.png')} />
          <img alt="" className='sm:h-24 sm:w-24 h-8 w-8' src={require('../assets/spices2.png')} />
          <img alt="" className='sm:h-24 sm:w-24 h-8 w-8' src={require('../assets/spices3.png')} />
        </div>
      </div>
      
       
    </div>
  )
}

export default Home