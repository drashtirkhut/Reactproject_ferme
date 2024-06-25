import React from 'react'
import Navbar from '../components/Navbar'
import { BsDot } from "react-icons/bs";

const Visit1 = () => {
  return (
    <div>
        <Navbar/>
        <div className='h-[1750px] w-[1290px] bg-slate-50 -ml-8'>
            <img className='h-[700px] w-[550px] ml-6' src="./src/assets/visit1.jpg" alt="" />
            <h1 className='text-emerald-900 text-3xl ml-96 -mt-[550px] font-serif'>The Ferme Restaurant</h1>
            <p className='text-xl text-emerald-900 font-light text-left ml-[694px] pt-6'>Serving breakfast, brunch and lunch every <br/> day. All our dishes are freshly made by hand,<br/> to showcase the very best of the <a className='font-bold text-emerald-950'> seasonal <br/> produce</a>  from our sustainable organic farm,<br/> Market Garden, Bakery and Creamery.</p>
           <p className='text-xl text-emerald-900 font-light text-left ml-[694px] pt-5'>We don’t take bookings; tables for breakfast,<br/> brunch, lunch or supper are available on a <br/> first come, first served basis. We have<br/> seating available both inside and outside.</p>
           <p className='text-xl text-emerald-900 font-light text-left ml-[694px] pt-5'>For reservation and more information <br/> about COVID guidelines call us +1 345 <br/> 5678 93</p>
          <div className='pt-8'>

           <button className='h-12 w-40 text-bold text-white bg-emerald-900 ml-64 ' >THE RESTAURANT</button>
          </div>
          <img className='h-[800px] w-[550px] pt-48 ml-[650px]' src="./src/assets/visit2.jpg" alt="" />
          <h1 className='text-3xl text-emerald-900 -ml-[900px] -mt-[650px]'>Visit with Kids</h1>
          <p className='text-left text-emerald-900 font-light text-xl ml-[106px] pt-8'>This summer, it’s more important than ever for <br/> families and kids to get outside. Farms are the <br/>  perfect place for kids to explore, continue learning <br/>  throughout the summer, and build a connection <br/>  with nature and the place that they live. Whether <br/>  it’s meeting lambs and sheepdogs, learning what a <br/>  carrot looks like before it’s pulled out of the ground, <br/>  or finding out how many stomachs cows have, a <br/>  summer spent on farms will help kids connect with <br/>  the world around them, spend time outside, and <br/>  have a blast doing it!</p>

<div>

          <BsDot className='text-6xl text-orange-500 ml-20 mt-4'/>
          <h1 className='text-xl text-emerald-900 -ml-[800px] -mt-11 font-light'>Meeting farm animals</h1>
          <BsDot className='text-6xl text-orange-500 ml-20 mt-2'/>
          <h1 className='text-xl text-emerald-900 ml-[155px] -mt-[45px] font-light text-left'>Learn what different foods look like when they’re <br/> growing</h1>
          <BsDot className='text-6xl text-orange-500 ml-20 mt-4'/>
          <h1 className='text-xl text-emerald-900 -ml-[720px] -mt-11 font-light'>Experience the growing season:</h1>
          <BsDot className='text-6xl text-orange-500 ml-20 mt-2'/>
          <h1 className='text-xl text-emerald-900 -ml-[740px] -mt-11 font-light'>On-farm learning experiences</h1>
          <div className='mt-12'>
            
           <button className='h-12 w-44 text-bold text-white bg-emerald-900 -ml-[920px] ' >OPENING HOURS</button>
          </div>
          <img className='mt-[170px] ml-[620px]' src="./src/assets/rooster.svg" alt="" />

          <h1 className='text-3xl  font-medium text-emerald-900 pt-16 font-serif'>Self-Guided Tours</h1>
          <p className=' text-emerald-900 text-xl font-light pt-12 '>We all know time spent in the outdoors brings benefits that last a lifetime. Connecting with nature provides young <br/> people the opportunity to develop their innate curiosity and wisdom that helps the world turn as it should in a <br/> circle of give and take. This is the true meaning of stewardship.</p>
          <p className='text-emerald-900 text-xl font-light pt-4'>During our open hours, pick up the Ferme map at the farm stand take be sure to visit all the inspiring places like: <br/> Mud Mountain, The Hugelkultur Area, The Trading Tree, The Forest, Greenhouses, The Barn and The Biodigester.</p>
          <p className='text-emerald-900 text-xl font-light pt-4'>Make sure you tag us on social:</p>
          <h1 className='text-emerald-950 font-bold text-xl pt-4'>#Ferme</h1>

          <iframe className="w-full aspect-video " src=""></iframe>

          <h1 className='text-4xl text-emerald-900 font-serif -ml-[980px]'>How to find us</h1>
          <p className='text-xl font-normal text-emerald-900 text-left ml-10 pt-9'>We’re located on 77 Worth Street, Floor 1, New York, NY <br/> 10013. The turn you’re looking for is marked ‘Ferme. If you <br/> get lost, please give us a call on <a  className='text-emerald-950 font-semibold underline decoration-solid decoration-emerald-950'>+1 345 5678 93.</a></p>
         <div className='pt-9'>

          <button className='h-12 w-32 text-white bg-emerald-900 font-semibold -ml-[1080px] '>GET DIRECTION</button>
         </div>
       
</div>
      
     </div>
     </div>
  )
}

export default Visit1
