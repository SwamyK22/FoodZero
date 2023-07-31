import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-[#233000]'>
        <div className='md:flex items-center justify-around w-full md:h-80 bg-[#233000] border-b-2 border-dotted px-5'>
            <img src={require('../assets/BrandLogo.png')} alt='logo'/>
            <div className='w-[15%] h-[50%] flex flex-col justify-between my-5'>
                <p className="font-semibold text-white text-2xl font-['Rufina']">Contact</p>
                <p className='text-white text-sm'>+1+86852346000 info@foodzero.com</p>
                <p className='text-white text-sm'>1959 Sepulveda Blvd. Culver City, CA, 90230</p>
            </div>
            <div className='w-[45%] h-[50%] flex flex-col justify-between'>
                <p className="font-semibold text-white text-2xl font-['Rufina']">Never Miss a Recipe</p>
                <div className='flex items-center justify-between w-[90%]'>
                    <input className='w-80 h-16 bg-[#233000] border-2 px-5' type="email" placeholder='Email Address' />
                    <button className="bg-[#5E6600] text-white w-44 h-16 text-2xl font-['Rufina']">Subscribe</button>
                </div>
                <p className='text-white text-xs'>Jion our subscribers and get best recipe delivered each week!</p>
            </div>
        </div>
        <div className='w-full md:h-24 md:flex justify-between items-center p-5'>
        <p className='text-white text-xs ml-10'>&copy; 2020 Zero Inc. All rights Reserved</p>
        <img src={require('../assets/Social Icons.png')} alt='Social Icons' className='mr-10'/>
        </div>
    </div>
  )
}

export default Footer