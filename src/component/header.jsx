import React, { useState } from 'react'
import logo from './../assets/images/Logo.png'
import HeaderList from './HeaderList';
import { HiDotsVertical } from 'react-icons/hi';
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv,HiPlus } from "react-icons/hi2";
import Searchbar from './Searchbar';
function Header() {
    const [show,setShow]=useState(false); 
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus 
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
  return (
    <div className='flex items-center justify-between  top-0 left-0 w-full z-10 '>
    <div className='flex items-center gap-6'><div>
    <img src={logo} className  ='w-[90px] md:w-[140px] object-cover '/> </div>
    <div className='flex items-center gap-2 pt-2'> <div className='hidden lg:flex gap-6'>{menu.map((item)=>(
        <HeaderList Name={item.name} Icon={item.icon}/>
  ))}</div>
  <div className='lg:hidden flex gap-6'>{menu.map((item,index)=>index<3&&(
    <HeaderList Name={""} Icon={item.icon}/>
))}</div>
  <div className='lg:hidden top-0 left-0 w-full z-10 ' onClick={()=>setShow(!show)}>
  <HeaderList Name={" "} Icon={HiDotsVertical} />
 {show? <div className='absolute mt-5 bg-[#121212] border-[1px] p-3 border-gray '>
  {menu.map((item,index)=>index>2&&(
    <HeaderList Name={item.name} Icon={item.icon}/>
  ))}
  </div>:null}
  </div>
  <div>
  
  
    <Searchbar className/>
    </div></div>
   
    </div>
    
    <div>
    <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className='w-[60px] rounded-full'/>
    </div>
    </div>

  )
}

export default Header