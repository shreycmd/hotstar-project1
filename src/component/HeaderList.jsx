/* eslint-disable react/prop-types */
import React from 'react'

function HeaderList({Name,Icon}) {
  return (<div className='text-white flex items-center gap-4 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2'>
    <Icon/>
   <h2 className=''>{Name}</h2> 
    </div>
    

  )
}

export default HeaderList