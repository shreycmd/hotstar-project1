import React from 'react'
import disney from '../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import nationalG from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwar from './../assets/images/starwar.png'
 
import starwarV from './../assets/videos/star-wars.mp4'
import disneyV from './../assets/videos/disney.mp4'
import marvelV from './../assets/videos/marvel.mp4'
import nationalGeographicV from './../assets/videos/national-geographic.mp4'
import pixarV from './../assets/videos/pixar.mp4'

function Housecard() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },

    ]
  return (
    <div className='flex m-2 p-2 px-4 md:px-10'>
    {productionHouseList.map((item, index) => (
        <div key={index} className=' border-[2px] border-gray shadow-2xl shadow-black  mx-2 rounded-xl hover:shadow-lg  hover:shadow-gray hover:scale-110 transition-all relative duration-500 ease-in-out cursor-pointer '>
        <video src={item.video} autoPlay loop playsInline muted className='absolute top-0 rounded-2xl z-0 opacity-0 hover:opacity-60'/>  
        <img src={item.image} className='w-full md:w-full z-[1] rounded-2xl hover:shadow-lg  hover:shadow-gray ' alt={`Production House ${index}`} />
            
        </div>
    ))}
</div>

  )
}

export default Housecard