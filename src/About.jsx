import React from "react";
function About() {
    return (
      <div>
        <div className="">
      <h1 className=" mx-5 text-yellow-200 text-left font-extrabold text-4xl"> Hello world1 </h1>
      <h2 className=" mx-2 text-red-500 text-center text-4xl"> Hello world2 </h2>
      <h3 className=" mx-3 text-pink-500 text-right font-extralight text-4xl"> Hello world3 </h3>
      <h4 className=" mx-4 text-blue-500 text-right font-thin text-4xl"> Hello world4 </h4>
      <h5 className=" mx-6 text-orange-400 font-mono text-4xl"> Hello world5 </h5>
      <h6 className=" mx-7 text-gray-500 font-serif text-4xl"> Hello world6 </h6>
      </div>
      <div className="text-center flex flex-col">
      <p className="text-9xl tracking-tighter">HI i am first para </p>
      <p className="text-8xl tracking-wide">HI i am second para </p>
      <p className="text-7xl">HI i am first para </p>
      <p className="text-6xl">HI i am first para </p>
      <p className="text-5xl line-clamp-2">HI i am first para </p>
      <p className="text-4xl">HI i am first para </p>
      <p className="text-3xl underline">HI i am first para </p>
      <p className="subpixel-antialiased line-through">The quick brown fox ...</p>
      <p className="antialiased italic overline ">The quick brown fox ...</p>
      </div>
      <div className="mx-5 flex flex-col">
      <ol className="list-inside list-disc text-cyan-500">
             <li>5 cups chopped Porcini mushrooms</li>
             <li>1/2 cup of olive oil</li>
             <li>3lb of celery</li>
              
        </ol>
      </div>

      </div>
    );
  }
  
  export default About;