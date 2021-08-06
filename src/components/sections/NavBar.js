import React from "react";
import {
    Link
  } from "react-router-dom";
  


export const NavBar = () => {
 return <nav>
   <ul>
     <Link to={'/'}>Quick Sort</Link>
     <Link to={'/bublesort'}>Buble Sort</Link>
     <Link to={'/insertsort'}>Insertion Sort</Link>     
     <Link to={'/mergesort'}>Merge Sort</Link>
     </ul>
 </nav>
}