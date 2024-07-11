import React from 'react'
import genrelist from '../constants/genrelist'
import Movielist from './Movielist'

function Genre() {
  return (
    <div>{genrelist.genere.map((item,index)=>index<=7&&(
        <div key={index} className='p-6 px-9 md:px-16'>
        <h2 className='text-[20px] text-white font-bold py-3'>{item.name}</h2>
        <Movielist Movieid={item.id}/>
        </div>

    ))}</div>
  )
}

export default Genre