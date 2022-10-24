import React from 'react';
import { useCallback } from 'react';
import Top_Part from './Top_Part';
import Bottom_Part from './Bottom_Part';

export default function Navbar() {

    const toggleSearchBox = useCallback(()=>{
    let search_box = document.getElementById("search-box")
    if (search_box.classList.contains("d-none")){
        search_box.style.animationName = "menu-animation"
        search_box.classList.remove("d-none")
    }else{
        search_box.style.animationName = "menu-animation-2"
        setTimeout(() => {
            search_box.classList.add("d-none")
            }, 1500);
        }
    },[])

    return (
        <div id="navbar" className=' position-relative'>
            <Top_Part toggleSearchBox={toggleSearchBox} />
            <Bottom_Part toggleSearchBox={toggleSearchBox} />
        </div>
    );
}