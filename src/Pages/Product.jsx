import React from 'react'
import Navbar from '../components/Navbar'
import { PiCowLight } from "react-icons/pi";

const Product = () => {
  return (
    <div>
      <Navbar />
      <div className='-ml-8'>
        <div className='h-[1400px] w-[1286px] bg-slate-100'>
          <h1 className='text-6xl font-serif text-emerald-900'>Vegetables</h1>
          <div className='flex justify-around pt-9'>

            <div>
              <img className='size-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-30' src="https://ferme.vamtam.com/wp-content/uploads/2021/11/romanesco.jpg" alt="" />
              <p className='font-serif text-teal-900 font-semibold mt-6' style={{ fontFamily: 'Cormorant sans-serif' }}>Romanesco</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>June to october</p>
            </div>
            <div>
              <img className='size-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-30' src="https://ferme.vamtam.com/wp-content/uploads/2021/11/savoy.jpg" alt="" />
              <p className='font-serif text-teal-900 font-semibold mt-6' style={{ fontFamily: 'Cormorant sans-serif' }}>Savoy</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>June to march</p>
            </div>
            <div>
              <img className='size-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-30' src="https://ferme.vamtam.com/wp-content/uploads/2021/11/cauliflower.jpg" alt="" />
              <p className='font-serif text-teal-900 font-semibold mt-6' style={{ fontFamily: 'Cormorant sans-serif' }}>Cauliflower</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>All year</p>
            </div>
          </div>
        </div>

        <div className=' -mt-[600px] flex  justify-around'>

          <div className='ml-5'>
          <img className='size-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-30' src="https://ferme.vamtam.com/wp-content/uploads/2021/11/broccoli.jpg" alt="" />
          <p className='font-serif text-teal-900 font-semibold mt-6' style={{ fontFamily: 'Cormorant sans-serif' }}>Broccoli</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>May to november</p>
          </div>
          <div>
         <img className='size-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-30' src="https://ferme.vamtam.com/wp-content/uploads/2021/11/courgettes.jpg" alt="" />
         <p className='font-serif text-teal-900 font-semibold mt-6' style={{ fontFamily: 'Cormorant sans-serif' }}>Courgettes</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>May to october</p>
          </div>
          <div>

            <img className='size-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-30' src="https://ferme.vamtam.com/wp-content/uploads/2021/11/kale.jpg" alt="" />
            <p className='font-serif text-teal-900 font-semibold mt-6' style={{ fontFamily: 'Cormorant sans-serif' }}>kale</p>
              <p className='text-teal-900 text-sm mt-2 font-semibold' style={{ fontFamily: 'Montserrat sans-serif' }}>June to april</p>
          </div>
        </div>

        <div className='mt-[140px]'>
        <img className='ml-[600px] ' src="./src/assets/rooster.svg" alt="" />
        </div>

      <div>
        <p className='text-3xl font-extralight font-serif text-emerald-900 pt-10'>We have laid out below examples of fruits and vegetables that may be <br/><a className='mt-4'>included in our weekly food basket program in 2021</a> </p>

        <p className='text-xl font-thin  text-emerald-900 pt-10'><a className='text-xl font-semibold text-emerald-950 hover:border-2 border-emerald-950'>Click here</a> for a more detailed list. Most of this food will be produced at one of our farms, but we also work <br/> with local partners who share our values.</p>

       <div className='-ml-1 mt-28'>
        <div className='h-[900px] w-[1290px] bg-slate-100'>
          <h1 className='text-5xl text-emerald-900 pt-52 '>Butcher</h1>
          <PiCowLight  className='text-4xl text-emerald-900 ml-9 mt-12'/>
          <h1 className='text-2xl font-serif text-emerald-900 -ml-[1080px] mt-7'>Organic Beef</h1>
          <p className='text-1xl font-serif text-left text-emerald-900 mt-5 ml-10'>Our animals for the table are slaughtered at about 30 <br/> months at a local, family-run, organic-certified <br/> abattoir. They are then hung for three weeks.</p>

        <div> 
         <img className='h-9 w-10  -mt-[190px] ml-[770px]' src="./src/assets/sheep.png" alt="" />
            <h1 className='text-2xl font-serif text-emerald-900 ml-[400px] mt-7'>Organic Lamb</h1>
            <p className='text-left mt-5 font-serif text-emerald-900 ml-[770px]'>Our lambs for the table are slaughtered at around 6 <br/> to 9 months at a local, family-run, organic-certified  <br/> abattoir a few miles away and are hung there for a  <br/> week before being butchered.</p>
          </div>

          <div> 
         <img className='h-9 w-10  mt-24 ml-9' src="./src/assets/chicken.png" alt="" />
            <h1 className='text-2xl font-serif text-emerald-900 -ml-[1080px] pt-4'>Organic Lamb</h1>
            <p className='text-left mt-5 font-serif text-emerald-900 ml-8'>In 2017 our organic Devonshire Gold chicken was <br/> awarded Gold at the Taste of the West awards.</p>
          </div>

          <div className='ml-[800px]'> 
         <img className='h-9 w-10  mt-24 ml-9' src="./src/assets/egg.png" alt="" />
            <h1 className='text-2xl font-serif text-emerald-900  pt-4'>Organic Lamb</h1>
            <p className='text-left mt-5 font-serif text-emerald-900 ml-8'>Our organic hens roam freely around our organic <br/> apple orchard, eating only natural organic food and <br/> any delicious grubs they can dig up!</p>
          </div>

        </div>

       </div>
      </div>



      </div>

    </div>



  )
}

export default Product
