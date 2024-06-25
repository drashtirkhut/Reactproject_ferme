import React from 'react'
// import { IoIosHeartEmpty } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { GiKiwiFruit } from "react-icons/gi";

const Card = () => {
    return (
        <div className='h-96 w-full flex justify-around max-sm:flex-wrap order-3 max-md:flex-wrap bg-gray-200 '>

            <div className=' h-56 w-96 border mt-[100px]   bg-white '>
                <GiKiwiFruit className='text-4xl text-emerald-900 ml-[340px]' />
                <h1 className='text-start ml-6 p-6 font-bold text-2xl text-emerald-900 '>01</h1>
                <h2 className='text-2xl pb-[14px] text-bold text-emerald-900'>Choose Organic Product</h2>
                <p className='text-center text-sm mb-10 text-emerald-900 font-medium'>Browse our organic broducts and selection boxes</p>
            </div>

            <div className=' h-56 w-96 border mt-[100px]   bg-white'>
                <CiClock2 className='text-6xl text-emerald-900 ml-80 ' />
                <h1 className='text-start ml-16 pt-[-200px] font-bold text-2xl text-emerald-900 '>02</h1>
                <h2 className='text-2xl mt-6 text-bold text-emerald-900'>Select a Delivery Date</h2>
                <p className='text-center text-sm mt-3 mb-10 text-emerald-900 font-medium'>Tuesday, Wednesday, Thursday, Friday or Saturday</p>
            </div>

            <div className=' h-56 w-96 border mt-[100px]   bg-white'>

                <h1 className='text-start ml-6 p-16 font-bold text-2xl text-emerald-900 '>03</h1>
            
                <h2 className='text-2xl -pb-[40px] text-bold text-emerald-900'>Free Local Delivery</h2>
                <p className='text-center text-sm  text-emerald-900 font-medium'>We deliver free all over the New York</p>
            </div>


        </div>

        // <div className='h-24 w-28 border-solid border-black'>
        // {/* <img className='h-52' src="https://ferme.vamtam.com/wp-content/uploads/2021/10/2-3-420x420.jpg" alt="" /> */}
        // </div>


        // <div className='h-96 w-full flex justify-bet  max-sm:flex-wrap order-3 max-md:flex-wrap bg-gray-200 relative'>


        //         {/* <div> */}

        //         <img className='h-56 w-56 relative' src="https://ferme.vamtam.com/wp-content/uploads/2021/10/2-3-420x420.jpg" alt="" />
        //         <IoIosHeartEmpty className='text-2xl ml-[200px]  absolute  bg-gray-200 ' />
        //         <h1 className='text-start  font-bold text-2xl text-lime-800 mt-56 -ml-[220px]'>Brussels Sprouts</h1>
        //         <h2 className='text-2xl -ml-[185px] pt-64 text-lime-800 font-bold'>$2.99</h2>
        //         {/* <h2 className='text-2xl -ml-80 text-bold text-lime-900 mt-56 mr-96'>$2.99</h2> */}

        //     </div>

    )
}

export default Card
