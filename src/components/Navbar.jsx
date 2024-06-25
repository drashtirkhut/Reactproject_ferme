import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div  >
      <div className='-mt-8 '>

      <div className='w-[1290px] -ml-9 flex justify-around p-20px border-solid border border-black bg-stone-50 '>
        
        <div className='h-20 flex justify-center '>
           <img src="./src/assets/rooster.svg" alt="" />
           <h1 className='text-2xl text-emerald-900 mr-20 pt-4'>Ferme</h1>
           {/* <h2 className='pt-9 pl-20 text-lime-800 font-thin '>est. 1982</h2> */}
                <ul className='flex mt-7 space-x-7 text-emerald-900 ' >
                  {/* <img src="" alt="" /> */}
                 <link></link>
              
                    <li >HOME </li>
                    <li>SHOP ONLINE </li>
                    <li>ABOUT</li>
                    <li>PRODUCE </li>
                    <li>VISIT </li>
                    <li>JOIN OUR CSA </li>
                    <IoIosHeartEmpty className='text-3xl ml- text-black hover:text-gray-500'/>
                    <IoPersonOutline  className='text-3xl text-black hover:text-gray-500'/>
                    <IoSearch  className='text-3xl text-black hover:text-gray-500'/>


                </ul>
                {/* <a href="#" class="contact-btn">Contact</a> */}
            </div>
    </div>
      </div>

    </div>
   
  )
}

export default Navbar
