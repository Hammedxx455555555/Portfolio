/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactTypingEffect from "react-typing-effect"


const Home = () => {

  return (
<>

   <div className='bg-black text-white px-4 font-serif text-center'>
   <h1 className="text-white">I&apos;m Hammed Usman </h1>
    
     <div className="auto-typing">
      <ReactTypingEffect
        text={["A WEB DEVELOPER !!!" ,"DON'T BE SHY TO HIRE !!!"]}
        speed={100}
        eraseSpeed={50}
        eraseDelay={2000}
        typingDelay={500}
      />
      </div>




      
 <img src="1712780504606.jpg"  alt="Developer's Logo" className=' mx-auto w-1/2 h-1/5' />
      </div>
    

</>

  );
};

export default Home;
