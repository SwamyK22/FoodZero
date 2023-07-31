import React from 'react'

function About() {
  return (
    <div className='w-full'>
        <img src={require('../assets/AboutImage.png')} alt='About'/>
        <div className='absolute top-[40%] right-[15%] w-[40%]' >
                <p className="text-white text-8xl font-['Rufina']">Who We Are</p>
                <p className="text-white font-['Rufina'] w-[70%] my-5">The most important thing for us is to give you the comfortable dining experience</p>
        </div>
        <div className='relative w-full h-[600px] flex items-center justify-evenly'>
            <img className='absolute top-16 left-96 h-[30%] w-[25%]' src={require('../assets/Tomato.png')} alt='Tm'/>
            <div className='w-[35%]'>
                <p className="text-5xl font-semibold font-['Rufina']">Our Story</p>
                <p className="font-['Rufina'] my-5 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, impedit dolore. Cumque, possimus sit facere dolore voluptate pariatur ut, quis quae ipsum, necessitatibus dolorem accusamus! Nisi magnam ex quae voluptatem?</p>
            </div>
            <img className='h-[50%] w-[40%]' src={require('../assets/OurStory.png')} alt='ourStory'/>
        </div>
        <div className='w-full flex justify-around px-20'>
            <div className='w-[40%] my-[5%] flex flex-col items-end'>
                <div className='w-[100%] flex flex-col items-center mb-[15%]'>
                    <p className="text-4xl font-['Rufina']">Restuarant Manager</p>
                    <p className="font-['Rufina'] my-5">Carson Hugn</p>
                    <img className='w-[100%]' src={require('../assets/RestuarantManager.png')} alt="Manager" />
                </div>
                <p className="font-['Rufina'] w-[70%] text-sm my-[10%] text-end">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis necessitatibus voluptatem id qui dolorem perspiciatis alias cupiditate voluptates, fugit autem facilis architecto magnam suscipit mollitia.</p>
            </div>
            <div className='w-[40%] my-[10%]'>
                <p className="font-['Rufina'] w-[70%] text-sm my-[10%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum explicabo, magni, libero quod dolore dolor consequatur</p>
            <div className='w-[100%] flex flex-col items-center mt-[25%]'>
                    <p className="text-4xl font-['Rufina']">Executive Chef</p>
                    <p className="font-['Rufina'] my-5">Jane Cooper</p>
                    <img className='w-[100%]' src={require('../assets/ExecutiveChef.png')} alt="Chef" />
                </div>
            </div>

        </div>
        <img src={require('../assets/LooksDelicious.png')} alt="" />
        <p className="text-6xl text-center font-['Rufina'] my-[10%]">Sophisticated Process</p>
        <div>
            
        </div>
    </div>
  )
}

export default About