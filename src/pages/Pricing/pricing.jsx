// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
const Pricing = () => {
  return (
    <div>
      <div name='pricing' className='w-full justify-center bg-black  font-serif'>

<div className='w-full mx-auto py-12'>

  <div className='text-center py-8 '>
    <h3 className='text-3xl font-bold uppercase text-slate-800 py-4'>pricing plans</h3>

  </div>

  <div className='grid md:grid-cols-2'>

    <div className='bg-white text-slate-900 m-4 p-7 rounded-xl shadow-2xl relative'>
      <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Basic Website Package</span>
      <div>
        <p className='text-6xl font-bold py-4 flex'>$500-1000<span className='text-xl text-slate-500 flex flex-col justify-end'>/ site</span></p>
      </div>
      <p className='text-2xl py-8 text-slate-500'>Includes:</p>
      <div className='text-2xl'>
          <p className='flex py-4'>Up to 5 pages</p>
          <p className='flex py-4'>Basic design and layout</p>
          <p className='flex py-4'>Responsive design (mobile-friendly)</p>
          <p className='flex py-4'>1 round of revisions</p>
          <p className='flex py-4'>Contact form</p>
    <Link to='/contact'> <button className='w-full py-4 my-4 mt-24 text-white'>Get Started</button></Link>
      </div>
    </div>

    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
      <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard Service Plan</span>
      <div>
        <p className='text-6xl font-bold py-4 flex'>$1000-$2000<span className='text-xl text-slate-500 flex flex-col justify-end'>/ site</span></p>
      </div>
      <p className='text-2xl py-8 text-slate-500'>Includes:</p>
      <div className='text-2xl'>
          <p className='flex py-4'>2 rounds of revisions</p>
          <p className='flex py-4'>Social media integration</p>
          <p className='flex py-4'>Custom design</p>
          <p className='flex py-4'>Up to 10 pages</p>
          <p className='flex py-4'>Contact form</p>
          <p className='flex py-4'>Responsive design (mobile-friendly)</p>
       <Link to='/contact'><button className='w-full py-4 my-4 text-white'>Get Started</button> </Link> 
      </div>
    </div>

     <div className='px-9 text-white py-9'> 
    <h2 className='text-4xl font-bold py-8'> Additional Services</h2>
        <ul>
<li>Website Maintenance: $50 - $100 per month</li>  
<li>Content Creation: $50 per page</li>  
<li>SEO Services: $100 - $500 per month</li>  
<li>Custom Feature Development: $50 - $150 per hour</li>  
<li> Consultation and Training: $100 per hour</li>  


     </ul>

     <h3 className='text-3xl font-bold py-8'>Contact Information</h3>
    <p>For a custom quote or more information about
         my web development services, please contact me at:</p>
     <ul>
        <li>Email:<a href="mailto:usmanhammed537@gmail.com">usmanhammed537@gmail.com</a></li>
        <li>Tel: <a href="tel:+2349060696115">09060696115</a></li>
     </ul>
             </div>

          </div>
                 </div>
                         </div>
                              </div>
  )
}

export default Pricing
