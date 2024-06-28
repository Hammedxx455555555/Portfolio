/* eslint-disable no-unused-vars */
import React from 'react'
 import img from '/public/1712780504606.jpg'
 import search from '/public/whatsapp.png'
const Contact = () => {


  return (
   <>
   <div className="bg-black h-full text-white px-4 ">

   <h1>Contact Me:</h1>
    <hr /><br />
        <p>Lagos, Nigeria</p>
           <p>Whatsapp:09060696115</p>
              <p>Email: usmanhammed537@gmail.com</p>
         <br />
    <p>Let&apos;s get in touch send me a message:</p>

<div className="md:flex bg-white rounded-lg p-6 mx-auto my-20 w-96">
    <img src={img}className='h-24 w-24 rounded-full mx-auto md:mx-0' alt="hammed logo" />
       <div>
          <h2  className='text-lg text-black font-medium' >Hammed Usman</h2>
             <div className='text-black font-bold'>Client Support</div>
                <div className='text-stone-700 font-bold'>usmanhammed537@gmail.com</div>
                    <div className='text-black font-bold'><a href="tel:+09060696115">09060696115</a> </div>
                   <p className='text-green-800 text-2xl'> Or Whatsapp me below:</p>
           <div><a href="https://wa.me/message/SIQFWCRQPL3BO1"><img className='rounded-full w-32 h-32' src={search} alt="" /></a></div>
        </div>
    </div>
</div>


   </>
  )
}

export default Contact