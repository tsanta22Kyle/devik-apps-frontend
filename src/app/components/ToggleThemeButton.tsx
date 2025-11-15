'use client'

import { useTheme } from "next-themes"
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";

export default function ToggleButton(){
    const {setTheme ,resolvedTheme, } = useTheme();

    return(
        <div className="z-100">
            <button  onClick={()=>{setTheme('light'),console.log(resolvedTheme);
            }} className="bg-rose-900">
                <BsSun/>
                {/* <BiMoon/> */}
            </button>
        </div>
    )
}