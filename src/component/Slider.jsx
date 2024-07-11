

import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Movieapi from '../assets/services/Movieapi'
import axios from 'axios';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
function Slider() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const [movielist,setmovielist]=useState([]);
    useEffect(()=>{
     axiocall();
    },[])
    const axiocall=()=>{
      Movieapi.axiocall.then(resp=>{
        setmovielist(resp.data.results);
      })
    }
  return (
    <div className=' z-0 '>
    <Carousel responsive={responsive} className='hover:border-solid shadow-2xl border-[4px] border-gray cursor-pointer transition-all duration-100 ease-in'>
 {movielist.map((item,index)=>(
    <img src={IMAGE_BASE_URL+item.backdrop_path} className=' rounded-lg' />))}
    </Carousel>
    </div>
  )
}

export default Slider







