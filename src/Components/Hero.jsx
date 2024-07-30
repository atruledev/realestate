import React from 'react'
import BG from "../assets/images/bg.png"
import Search from "../assets/images/search.png"
import { CiSearch } from "react-icons/ci";
function Hero() {
  return (
    <>
<section class="text-gray-600 body-font ">
  <div class="container mx-auto flex px-5 py-24   items-center max-w-screen-xl md:py-10 ">
    <div class="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex  md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:flex-col">
      <h1 class="title-font sm:text-6xl text-7xl mb-4  text-black font-lg font-semibold xl:text-6xl">Find Real Estate & Get Your Dream Place
       
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-[#fece51] border-0 py-2 px-6 focus:outline-none hover-bg-[#fece52] rounded text-md">Buy</button>
        <button  class=" inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-md">Rent</button>

      </div>
      <div className=' border border-solid border-black p-5 flex  '>
        <input type='text' name= "city" placeholder= "City Location"  className='p-0.5 text-black' />
        <input type='text' name= "city" placeholder= "Min Price"  className='p-0.5 text-black'/>
        <input type='text' name= "city" placeholder= "Max Price"  className='p-0.5 text-black'/>
        <button><CiSearch color='#fece51'  size={'28px'} /></button>

    </div>
    <div className='flex  py-10'>
        <div className='mx-6 '>
        <h1 className='text-black text-3xl font-semi-bold font-md font-bold font-poppins'>16+ </h1>
        <p>Years of Experience</p>
        </div>
        <div className='mx-6'>
        <h1 className='text-black text-3xl font-semi-bold font-md font-bold'>200+ </h1>
        <p>Award gained</p>
        </div>
        <div className='mx-6'>
        <h1 className='text-black text-3xl font-semi-bold font-md font-bold'>1200+ </h1>
        <p>Property Ready</p>
        </div>
       
    </div>
    </div>
    
    <div class=" ">
      <img class="object-cover object-center rounded" alt="hero" src={BG}/>
    </div>
  
  </div>
</section>

</>
  )
}

export default Hero