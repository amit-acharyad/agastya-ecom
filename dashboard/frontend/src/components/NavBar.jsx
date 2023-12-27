import React from 'react'
import { FaReact } from "react-icons/fa6";
import NavItem from "./NavItem";
import { TbBorderStyle2 } from "react-icons/tb";
import { RiHome2Line } from "react-icons/ri";
import { RiWechatChannelsFill } from "react-icons/ri";
import { MdAir, MdKey, MdProductionQuantityLimits } from "react-icons/md";
import { useState } from 'react';
const navOption = [
  { id:1,label: "Dashboard", isActive:true, path:"/dashboard" ,icon: RiHome2Line },
  {id:2, label: "Product", isActive:false,path:"/products" , icon: MdProductionQuantityLimits },
  { id:3,label: "Orders", isActive:false, path:"/orders" ,icon: TbBorderStyle2 },
  { id:4,label: "Channels", isActive:false,path:"/channels",icon: RiWechatChannelsFill },
  {
    id:5,label:"Ask AI",isActive:false,path:"/ai",icon: MdKey
  }, {
    id:6,label:"AI Metrics",isActive:false,path:"/insight",icon: MdAir
  }
];

const NavBar = () => {
  
  const [navOptions,SetNavOPtions]=useState(navOption);
  const updatenav=(i)=>{
    const updatenavs = navOptions.map(n => {
      if (n.id != i) {
        return {
          ...n,
          isActive:false,
        };
      } else { 
        return {
          ...n,
          isActive:true,
        };
      }
    });
   
    SetNavOPtions(updatenavs);
  }
  return (
    <>
         <div className="min-h-screen w-72  flex-col p-5 pt-8 pr-[120px]">
          <div className="flex mb-8">
            <FaReact className="text-6xl mr-2" />
            <h1 className="font-semibold text-2xl pt-4">Agastya</h1>
          </div>

          <div>
            {navOptions.map((item,index) => {
              return <NavItem key={index} data={item} update={updatenav} />;
            })}
          </div>
        </div>
      
    </>
  )
}

export default NavBar
