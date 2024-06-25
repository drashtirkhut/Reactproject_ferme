import React from 'react'
import Navbar from '../components/Navbar'
import { BsDot } from "react-icons/bs";

const Joincsa = () => {
  return (
    <div>
      <Navbar/>
     <div className='w-[1290px] h-[3000px] bg-stone-100 -ml-9'>
        <div className='flex'>
            <img className='h-[650px] w-[550px] ml-10' src="./src/assets/Joincsa.jpg" alt="" />
            <h1 className='text-4xl font-serif text-emerald-900 pt-56 ml-40 md:shrink'>Here Are The Details</h1>
            <BsDot className='text-6xl text-orange-500 mt-72 -ml-[356px]'/>
            <p className='text-xl text-left text-emerald-900 pt-[304px] -ml-3'>2021 Fall/Winter CSA will run every week <br/> from <a className='text-xl font-semibold text-emerald-950'> October 15 - Feb 11th </a>(18 weeks).</p>
            <BsDot className='text-6xl text-orange-500 mt-96 -ml-[407px]'/>
            <p className='text-xl text-left text-emerald-900 pt-[380px] -ml-[15px] mt-5'>Share pick-up is on <a className='text-xl font-semibold text-emerald-950'>Friday</a> evenings 6 <br/>-7pm at The Ferme Farm.</p>
        </div>
        <p className='text-emerald-900 font-semibold pt-4 -ml-[855px]'>FRESHLY PICKED SEASONAL ORGANIC PRODUCE </p>

    <div className= 'pt-40'>
      <img className='h-[600px] w-[600px] ml-[630px]' src="./src/assets/Joincsa1.jpg" alt="" />
      <h1 className='text-emerald-900 font-serif text-3xl text-left ml-9 -mt-[600px]'>There Are Three Share Sizes to <br/> Choose From</h1>
     <BsDot className='text-6xl text-orange-500 ml-3 pt-5'/>
     <p className='text-xl font-light text-emerald-900 text-left ml-20 -mt-8'><a className='text-emerald-950 font-semibold '>Personal Share </a>- This weekly share size is perfect <br/> for 1-2 people and will allow you to choose <br/> around 5-7 items each week. The Personal Share <br/> is $432 for the season which averages $24 per <br/> week.</p>


     <BsDot className='text-6xl text-orange-500 ml-3 pt-5'/>
     <p className='text-xl font-light text-emerald-900 text-left ml-20 -mt-8'><a className='text-emerald-950  font-semibold'>Family Share</a>- This weekly share should support <br/> 3-4 people who eat a moderate amount of<br/>  veggies and will allow you to choose around 7-9 <br/>  items each week. The Family Share is $576 for <br/>  the season which averages $32 per week.</p>
  
     <BsDot className='text-6xl text-orange-500 ml-3 pt-5'/>
     <p className='text-xl font-light text-emerald-900 text-left ml-20 -mt-8'><a className='text-emerald-950  font-semibold'>Jumbo Share</a>- This weekly share is geared <br/> towards those with vegetable based diets and <br/> will allow you to choose around 12-14 items each <br/> week. The Jumbo Share is $936 for the season <br/> which averages $52 per week.</p>
    </div>

    <div className='pt-52'>
      <div className='h-[500px] w-[1197px]  bg-orange-400 ml-8'>
      <h1 className='text-3xl text-white font-semibold font-serif pt-20 text-left ml-20 '>How to singn up</h1>
      <h2 className='text-2xl text-white font-serif pt-9 text-left ml-20 '>Simply Order Online!</h2>
      <p className='text-white text-left text-1xl ml-20 pt-4'>The first few items in our online farm store has each of the <a className=' font-semibold'>CSA Share sizes <br/> available</a>. Add your Share to your cart and check out. <a className=' font-semibold'>**Please chose to pay </a> via <br/>“Cash Payment” and do not use a credit card or PayPal to pay for your CSA <br/>share. Please bring a check or cash with you to our Saturday morning market <br/> or mail your check to the farm directly (address here). This greatly helps us <br/> reduce the high fees charged by credit card companies and is most <br/> appreciated by our little farm!</p>
      </div>
<div className='pt-52'>

    <h1 className='text-6xl font-serif text-emerald-900 '>Seasonal Shares</h1>
    <h2 className='text-emerald-900 font-serif text-xl pt-6'>2021 Fall/Winter CSA</h2>
  
</div>

    </div>
    
     </div>
    </div>
  )
}

export default Joincsa
