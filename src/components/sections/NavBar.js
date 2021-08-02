import React from "react";
import {
    Link
  } from "react-router-dom";
  


export const NavBar = () => {
 return <nav>
     <Link to={'/'}>Buble Sort</Link>
     <Link to={'/insertionsort'}>Insertion Sort</Link>
     <Link to={'/quicksort'}>Quick Sort</Link>
     <Link to={'/mergesort'}>Merge Sort</Link>
 </nav>
}