import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { LiaCcAmex } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { LiaCcApplePay } from "react-icons/lia";
import { IoIosArrowUp } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";


const Footer = () => {
  return (
    <div className='-mt-8'>
      <div className='w-[1290px] h-[600px] -ml-[40px] bg-stone-50'>
        <div className='flex'>
          <h1 className='text-2xl mt-9 ml-11 text-emerald-900'>Contact us</h1>
          <h2 className='mt-24 -ml-[105px] text-emerald-900'>Ferme</h2>
          <p className='mt-28 -ml-[44px] text-emerald-900'> 77 Worth Street, Floor 1,<br />New York, NY 10013</p>
          <h3 className='mt-52 -ml-[170px] text-emerald-900'>+1 345 5678 93</h3>

          <h1 className='text-2xl mt-9 ml-32 text-emerald-900'>Ordering & Delivery</h1>
          <p className='mt-24 -ml-[210px] text-emerald-900'> Delivery is always free. All you need to <br /> do is meet our minimum spend. For <br />more information read our FAQ</p>
          <div>
            <div className='flex justify-between text-4xl pt-44 text-emerald-900 ml-[-270px]'>
              <FaCcVisa  />
              <FaCcPaypal />
              <LiaCcAmex />
              <LiaCcApplePay />
            </div>

          </div>


          <h1 className='text-2xl mt-9 ml-40 text-emerald-900'>Subscribe & Get Free Delivery</h1>
          {/* <input className='h-8 w-64 mt-60' type="email" /> */}
      
          <GoArrowRight className='text-3xl text-emerald-900 mt-40 ml-20 '/>

        

          {/* <input type="text" /> */}

        </div>

        <div className='h-28 mt-10 border-solid border border-black flex'>
          {/* <h1 className='text-xl text-bold text-lime-800 ml-9'>Ferme</h1> */}

          <h3 className='ml-80 pt-12 text-xl text-bold text-emerald-900'>JOBS AT THE FARM</h3>
          <h4 className='ml-8 pt-12 text-xl text-bold text-emerald-900'>FAQ</h4>
          <h5 className='ml-8 pt-12 text-xl text-bold text-emerald-900'>HELP & CONTACT</h5>

          <FaFacebook className='text-3xl text-emerald-900 ml-24 mt-12' />
          <FaInstagram className='text-3xl text-emerald-900 ml-20 mt-12' />
          <FaYoutube className='text-3xl text-emerald-900 ml-20 mt-12' />
        </div>
        <div className='flex text-emerald-900 pt-14 '>
          <h1 className='ml-14'>Copyright © 2024 Vamtam Themes. All Rights Reserved.</h1>
          <h2 className='ml-72'>Terms & Conditions</h2>
          <h3 className='ml-20'>Privacy & Cookie Policy</h3>
        </div>
        <div >
          <IoIosArrowUp className='w-10  ml-[577px] bg-white hover:bg-red-700' />
          <button className='h-10 w-10 bg-white '>UP</button>
        </div>
      </div>

    </div>


  )
}

export default Footer
