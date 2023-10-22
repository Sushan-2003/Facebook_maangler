import Image from "next/image";
import React from "react";
import {ImUsers} from "react-icons/im";
import Sidebaritem from "./Sidebaritem";
import { MdGroups, MdOutlineOndemandVideo,MdOutlineExpandMore } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import {BsStopwatch} from "react-icons/bs";

const Sidebar =() => {
    return(
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]">
        <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <Image src= "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/768px-Facebook_f_logo_%282021%29.svg.png?20210818083032" 
        height={40}
        width={40}
        className="rounded-full cursor-pointer"
        />
        <p className="hidden sm:inline-flex font-medium">Sushan Nayak</p>
        </div>
        <Sidebaritem Icon={ImUsers} value="Friends"/>
        <Sidebaritem Icon={MdGroups} value="Groups"/>
        <Sidebaritem Icon={AiOutlineShop} value="Marketplace"/>
        <Sidebaritem Icon={MdOutlineOndemandVideo} value="Watch" />
        <Sidebaritem Icon={BsStopwatch} value ="Memories"/>
        <Sidebaritem Icon={MdOutlineExpandMore} value="See More" />
    </div>
    );
};

export default Sidebar;
