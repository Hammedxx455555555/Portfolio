/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import CountUp from "react-countup"
const Portfolio = () => {
  return (
    <>
    
    <div className="bg-black font-mono text-white px-4">
    <div className="">

<h1>Portfolio:</h1>
<hr /><br />
<p>
 I&apos;ve had the privilege of working on a diverse range of projects,
 each presenting its own set of challenges and opportunities for creativity.<br />
 Whether it&apos;s a static website, dynamic web applications, or engaging 
 multimedia experiences,I take pride in delivering solutions that exceed expectations
 and leave a lasting impression on users.</p> 


 

 <div className="grid md:grid-cols-2">


<div className='bg-white rounded-xl shadow-2xl text-black my-9'>
  <div className="font-bold text-2xl my-6">
    Cafe
     <div className="text-gray-600 text-xl">
  <img src="cafe.png"  alt="" height="230px" className='mx-auto'  width="70%" /> 
        </div>
    </div>
</div>


  <div  className="bg-white rounded-xl shadow-2xl text-black my-9">
     <div className="font-bold text-2xl my-6 ">
    Calculator
     <div className="text-gray-600 text-xl">
    <img src="calc.png" alt="" height="230px" className='mx-auto' width="70%" />
        </div>
   </div>
</div>
  

<div  className="bg-white rounded-xl shadow-2xl text-black my-9">
   <div className="font-bold text-2xl my-6 ">
    Weather ForeCaster
       <div className="text-gray-600 text-xl">
    <img src="weather.png" alt="" height="230px" className='mx-auto' width="70%" />

          </div>
      </div>
   </div>
   and many more
</div>
      </div>
         </div>
   
    </>
  )
}

export default Portfolio