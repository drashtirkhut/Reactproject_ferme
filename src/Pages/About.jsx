import React from 'react'
import Navbar from '../components/Navbar'


const About = () => {
  return (
    <div>
      <Navbar />
      <div className='w-[1290px] h-[1620px] -ml-9 bg-stone-50'>

        <h1 className='text-6xl font-extrabold absolute  text-white'>the <br /> Farm</h1>
        <img className='h-[500px] w-[1290px] Relative  brightness-50 bg-cover ' src="./src/assets/assat2.jpg" alt="" />
        <p className=' w-[500px] absolute  top-[500px] left-52  text-emerald-900 text-center  bg-stone-50 '>On our organic farms in the Cotswolds <br /> and Staffordshire, we work the land <br /> responsibly, mindfully, with intelligence <br /> and with a conscience. We hold ourselves <br /> accountable for our ethical and <br /> environmental standards and welcome <br /> the opportunity to show you what we do.</p>


        <div className='flex'>
          <img className='h-[800px] mt-40' src="./src/assets/assets1.jpg" alt="" />
          <div>
            <h1 className='text-4xl font-semibold text-emerald-900 pt-80 -ml-[200px]'>What we Believe</h1>
            <div>

              <p className='pt-6 ml-32 text-left font-light text-xl text-emerald-900'>We believe that organic and ethically produced food is <br /> better for you, better for the environment, better for <br /> the animals and produces a difference you can taste. <br /> The story behind your food is important. By choosing <br /> to buy from producers directly you can trust and <br /> understand what you’re eating, where it came from  <br /> and the life it lived.</p>
              <p className='pt-4 ml-32 text-left font-light text-xl text-emerald-900'>For 3 generations and over 50 years we’ve been <br /> farming at Ferme in the heart of Yorkshire. Producing <br /> sustainable, high welfare food you and your family can <br /> trust. Our team work hard to put quality and animal <br /> welfare at the heart of everything we produce.</p>
              <h1 className='pt-72 -ml-[1300px] text-emerald-900 '>WE BELIEVE THAT ORGANIC FARMING IS A POSITIVE PHILOSOPHY</h1>
              <img className='pt-10' src="./src/assets/rooster.svg" alt="" />
              <h1 className='text-3xl font-bold text-emerald-900 -ml-[570px] pt-8'>What we do</h1>
            </div>
            <p className='text-emerald-900 -ml-[500px] justify-center text-xl'>Ferme is a social enterprise. We are an organic market garden and community hub situated just outside of <br /> Winkleigh, North Devon. We grow fantastic <a class="text-emerald-950">vegetables, salads, herbs & fruits,</a> using only hand tools. Our aim is to <br /> grow produce that benefits us, our wildlife the soil and our community.</p>
            <p className='text-emerald-900 -ml-[500px] justify-center text-xl pt-4'>Our food is for our community. All our produce is eaten within a 30 mile radius of the farm. We invite our <br />community to be a part of the farm, joining us for events <br /> and volunteering at the farm. Keep an eye on our <a className='underline decoration-emerald-950 text-emerald-950'>events page</a> for this year’s happenings.</p>

            <div className='h-[2000px] w-[1290px] bg-stone-50 -ml-[620px] '>
              <div>
                <img className='ml-16 pt-24' src="https://ferme.vamtam.com/wp-content/uploads/2021/10/text-path.svg" alt="" />

                <h1 className='text-3xl font-medium pt-9 -ml-[980px] text-emerald-900'>Our Philosophy</h1>
                <img className='h-[600px] w-[550px] ml-[680px] -mt-[64px]' src="./src/assets/about1.jpg" alt="" />
                <p className='text-xl text-emerald-900 text-left -mt-[500px] ml-14 font-light'>We believe that organic farming is a positive <br /> philosophy, and is more than just avoiding the use <br /> of artiﬁcial chemicals and fertilisers. It is a<br /> sustainable approach to farming which views the<br /> farm as a whole system in harmony with the<br /> natural surroundings and nature itself as well as <br />the local community.</p>
                <p className='text-xl text-emerald-800 text-left ml-14 pt-5 font-light'>Fermr is part of a <a className='font-bold text-emerald-900' >Higher Level Environmental <br /> Stewardship</a> scheme which includes restoring wild <br /> ﬂower meadows and other traditional grasslands, as <br /> well as hedgerow and ﬁeld margin management.<br /> Since 1982, we have planted over 1,800 tress and <br /> restored two miles of hedgerow.</p>
              </div>
              <div className='pt-7'>

                <button className='h-12 w-40 text-bold text-white bg-emerald-900 -ml-[1035px] ' >OUR PEOPLE</button>

                <h1 className='text-4xl text-emerald-900 pt-44'>Our Animals</h1>
                <p className='text-xl text-emerald-900 pt-9'>The farm is home to a magniﬁcent herd of rare breed Longhorn cattle, pedigree Lleyn and <br /> Polled Dorset sheep, turkeys, chickens, geese and ducks, two goats, three guinea pigs, two <br /> rabbits and various other friendly animals! All of our animals have a 100% organic diet and <br /> are free range, happy and healthy – no chemicals, no cages and no suffering.</p>
                <div className='pt-8 '>

                  <button className='h-12 w-80 text-bold text-white bg-emerald-900 ' >WHY ORGANLC & SUSTAINABLE</button>

                  <img className='h-[580px] w-[1130px] ml-20 pt-9' src="./src/assets/about2.jpg" alt="" />
                  <h1 className='pt-56 text-4xl text-emerald-900'>Real Reviews From Real Customers</h1>

                  <a class="elementor-icon elementor-animation-grow" href="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJ0eXBlIjoidmlkZW8iLCJ2aWRlb1R5cGUiOiJ5b3V0dWJlIiwidXJsIjoiaHR0cHM6XC9cL3d3dy55b3V0dWJlLmNvbVwvZW1iZWRcL3N1WWNyaTNGemNJP2ZlYXR1cmU9b2VtYmVkIn0%3D">
<i aria-hidden="true" class="vamtamtheme- vamtam-theme-play"></i> </a>

                </div>

              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
