import React from 'react'
import { IoHeartOutline } from "react-icons/io5";


const Home = () => {
  return (
    <div className=' bg-slate-100 h-full w-full'>
<div className='flex mt-20 justify-center ml-4 '>
            <div className='relative'>
              <div className='absolute ml-48 size-8' style={{ backgroundColor: '#f6f4f1' }}>
                <img className='size-4 ml-2 mt-2' src="https://img.icons8.com/?size=100&id=16076&format=png&color=737373" alt="" />
              </div>
              <div className='absolute h-6 mt-1 w-14 origin-bottom -rotate-90' style={{ backgroundColor: '#d8e1cc' }}>
                <p className='text-center mt-1 text-teal-900 font-semibold text-xs'>SALE!</p>
              </div>
              <img className='size-56  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' src="./src/assets/Home1.jpg" alt="" />
              {/* <div className='absolute bg-teal-900 w-56 p-3 flex justify-center'>
                <p className='text-white mt-2'>SELECT OPTIONS</p>
              </div> */}
            </div>
            <div className='relative ml-6'>
              <div className='absolute ml-48 size-8' style={{ backgroundColor: '#f6f4f1' }}>
                {/* <img className='size-4 ml-2 mt-2' src="https://img.icons8.com/?size=100&id=16076&format=png&color=737373" alt="" /> */}
                <IoHeartOutline className=' text-gray-400 ml-2 mt-2 text-xl' />
              </div>
              <img className='size-56  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' src="./src/assets/Home2.jpg" alt="" />
              {/* <div className='absolute bg-teal-900 w-56 p-3 flex justify-center'>
                <p className='text-white mt-2'>SELECT OPTIONS</p>
              </div> */}
            </div>
            <div className='relative ml-6'>
              <div className='absolute ml-48 size-8' style={{ backgroundColor: '#f6f4f1' }}>
                <img className='size-4 ml-2 mt-2' src="https://img.icons8.com/?size=100&id=16076&format=png&color=737373" alt="" />
              </div>
              <div className='absolute h-6 mt-1 w-14 origin-bottom -rotate-90' style={{ backgroundColor: '#d8e1cc' }}>
                <p className='text-center mt-1 text-teal-900 font-semibold text-xs'>SALE!</p>
              </div>
              <img className='size-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' src="./src/assets/Home3.jpg" alt="" />
              {/* <div className='absolute bg-teal-900 w-56 p-3 flex justify-center'>
                <p className='text-white mt-2'>SELECT OPTIONS</p>
              </div> */}
            </div>
            <div className='relative ml-6'>
              <div className='absolute ml-48 size-8 bg-slate-100  hover:bg-emerald-200' >
                {/* <img className='size-4 ml-2 mt-2 hover:bg-emerald-800' src="https://img.icons8.com/?size=100&id=16076&format=png&color=737373" alt="" /> */}
                <IoHeartOutline className=' text-gray-400 ml-2 mt-2 text-xl' />

              </div>
              <img className='size-56  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' src="./src/assets/Home4.jpg" alt="" />
              <div className='absolute bg-teal-900 w-56 p-3 flex justify-center'>
                <p className='text-white mt-2'>SELECT OPTIONS</p>
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className='ml-40 mt-4'>
              <p className='font-serif text-teal-900 font-semibold' style={{ fontFamily: 'Cormorant sans-serif' }}>Organic Beef Shin 500g</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>$9.99 – $35.00</p>
            </div>
            <div className='ml-20 mt-4'>
              <p className='font-serif text-teal-900 font-semibold' style={{ fontFamily: 'Cormorant sans-serif' }}>Organic Ginger Snaps 160g</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>$4.99</p>
            </div>
            <div className='ml-16 mt-4'>
              <p className='font-serif text-teal-900 font-semibold' style={{ fontFamily: 'Cormorant sans-serif' }}>Organic Semi-Skimmed Milk<br></br> 1l</p>
              <div className='flex mt-2'>
                <p className='text-teal-900 text-sm font-semibold line-through' style={{ fontFamily: 'Montserrat sans-serif', color: '#8c9680' }}>$2.49</p>
                <p className='text-teal-900 text-sm font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>$1.49</p>
              </div>
            </div>
            <div className='ml-12 mt-4'></div>

            <p className='font-serif text-teal-900 font-semibold' style={{ fontFamily: 'Cormorant sans-serif' }}>Organic Blueberry & Acai<br></br> Kefir 250ml</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>$3.99</p>
            </div>
          </div>
  )
}

export default Home


