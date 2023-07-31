import React from 'react'

function Home() {
  return (
    <div>
      <div className='h-screen bg-[#233000] '>
        <div className='sm:p-28 p-5 flex'>
          <div className='z-20'>
          <h1 className='text-white w-[85%] sm:text-8xl text-2xl sm:h-[100%] h-[70%]'>Healthy Eating is important part  of lifestyle</h1>
         <p className='text-white sm:w-[60%] text-xs w-44'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, minus!</p>
          </div>
        <img alt='' className='absolute sm:left-[58%] left-44  sm:top-52 sm:h-96 sm:w-70 h-32 w-32' src={require('../assets/Image.png')} />
        </div>
      </div>
      
       
    </div>
  )
}

export default Home