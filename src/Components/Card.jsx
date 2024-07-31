import React from 'react'
import Pin from "../assets/images/pin.png"
import Bed from "../assets/images/bed.png"
import Bath from "../assets/images/bath.png"

function Card({CardName, cardLocation, Price, bedroomDesc, BedDesc}) {
  return (
    <div>
        
<a href="#" class="flex flex-col items-center bg-white  md:flex-row  hover:bg-gray-100 ">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-balck">{CardName} </h5>
        <div className='flex'>
        <img src={Pin} style={{width: "23px", height: "23px", padding:"5px"}}  ></img>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{cardLocation}</p>
       </div>
       <div className='flex '>
        <p class="mb-3 font-normal text-white-700 bg-[#fadb8b] p-2">{Price}</p>
        </div>
        <div className='flex'>
        <div className='flex px-2 pt-1  bg-gray-200'>
        <img src={Bath} style={{width: "25px", height: "25px", padding:"5px"}}  ></img>
        <p class="mb-3  text-sm font-medium text-black ">{bedroomDesc}</p>
       </div>
       <div className='ml-5 flex pt-1 bg-gray-200 px-2 '>
        <img src={Bed} style={{width: "25px", height: "25px", padding:"5px"}}  ></img>
        <p class="mb-3 text-sm font-medium text-black  ">{BedDesc}</p>
       </div>
       </div>
    
    </div>
</a>

    </div>
  )
}

export default Card