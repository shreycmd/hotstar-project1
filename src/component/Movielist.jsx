/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Movieapi from '../assets/services/Movieapi'

import MovieImages from './MovieImages';
import Hrmovie from './Hrmovie';

function Movielist({Movieid}) {
    const [movie,setmovie]=useState([]);
    useEffect(()=>{
    getmovie();
    },[])
    const getmovie=()=>{
        Movieapi.moviegenre(Movieid).then(resp=>{
            console.log(resp.data.results);
            setmovie(resp.data.results);
        })
    }
  return (
    <div className='flex gap-6 overflow-x-auto scrollbar-hide pt-4 pb-6 px-6' >
    {movie.map((item,index)=>(
      <MovieImages movie={item}/>
        
  ))}</div>
  )
}

export default Movielist