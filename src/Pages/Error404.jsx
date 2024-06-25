import React from 'react'
import { FaRegHeart } from "react-icons/fa6";

const Error404 = () => {
  return (
    <div>
    {/* <div class="py-10">
  <div class="text-center">
    <p class="text-base font-semibold text-black">404</p>
    <h1 class="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
      Page not found
    </h1>
    <p class="mt-4 text-base leading-7 text-gray-600">
      Sorry, we couldn&amp;apos:t find the page you&#x27;re looking for.
    </p>
    <div class="mt-4 flex items-center justify-center gap-x-3">
      <button
        type="button"
        class="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mr-2"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Go back
      </button>
      <button
        type="button"
        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Contact us
      </button>
    </div>
  </div> */}
{/* </div> */}
<div className='minicard  h-[350px] w-[350px] relative justify-start '>

  <img 
    src="https://ferme.vamtam.com/wp-content/uploads/2021/11/box-4-630x630.jpg" 
    alt="beef" 
    className='hover:cursor-pointer' 
    onMouseOver={(e) => {
      const button = e.target.nextElementSibling;
      button.style.display = 'block';
    }}
    onMouseOut={(e) => {
      const button = e.target.nextElementSibling;
      button.style.display = 'none';
    }}
  ></img>

  <button 
    className='absolute bg-teal-100 hover:bg-teal-700 text-teal-900 font-semibold text-s -mt-[350px] ml-[318px]' 
    style={{ display: 'none' }}
    onClick={() => {
      const optionButton = document.getElementById('option-button');
      optionButton.scrollIntoView({ behavior: 'mooth' });
    }}
  >
    Select Option
  </button>

  <div className='absolute h-9  w-20  items-center -rotate-90 -mt-[328px] bg-teal-100 -ml-6' >
    <p className=' text-center  text-teal-900 font-semibold text-s'>SALE!</p>
  </div>
  <FaRegHeart className=' bg-teal-100 hover:bg-teal-700 size-8 absolute  -mt-[350px] ml-[318px]' />

   {/* Add an id to the option button */}
  <button id='option-button'>Option Button</button>

</div>

    </div>
  )
}

export default Error404
