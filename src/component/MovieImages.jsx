import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function MovieImages({movie}) {
  return (<div className='hover:scale-110 transition-all duration-300 ease-in-out pt-4' >
    <img src={IMAGE_BASE_URL+movie.poster_path}
    className='w-[90px] md:w-[200px]  rounded-xl hover:scale-110 hover:shadow-gray hover:shasow-sm hover:cursor-pointer hover:border-[3px] border-gray '/>
    <h2 className='w-[90px] md:w-[200px] m-2 text-gray '>{movie.title}</h2>
    </div>
  )
}

export default MovieImages