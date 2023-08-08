import React from 'react'
import {GiCompass, GiDiamondHard, GiStabbedNote} from 'react-icons/gi'
const SectionTwo = () => {
  return (
      <section className='m-h-[25vh]  my-20 py-5'>
          <div className="section bg-[#eaded7] h-[400px] flex">
              <div className="header w-full flex flex-col lg:flex-row lg:justify-around m-5 lg:m-0 lg:items-center relative lg:top-[-100px]" >
              <h3 className='text-[#453227] font-bold' style={{
                  fontSize: '30px'
              }}>
                Custom Furniture
                <br />
                Built Only For You
              </h3>
              <p className='text-[#795744]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe dolorum debitis <br/> consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.
              </p>
          </div>
          </div>
          <div className="boxContainer flex justify-evenly flex-wrap gap-4 lg:gap-2 relative top-[-150px]">
              <div className="box bg-[#c5a491] h-[330px] rounded-md flex flex-col items-center justify-center gap-6">
                  <div className="img rounded-full bg-white w-14 h-14 flex justify-center items-center">
                      <GiCompass className='text-4xl'/>
                  </div>
                  <div className="info w-[90%] lg:w-[400px] text-center flex flex-col items-center">
                      <h2 className='font-bold text-3xl text-[#453227]'>Misson</h2>
                      <p className=' leading-7 mt-4 w-[100%] lg:w-[350px] text-[#5f4435] text-center'>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
                          ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi
                      </p>
                  </div>
              </div>

              <div className="box bg-[#c5a491] h-[330px] rounded-md flex flex-col items-center justify-center gap-6">
                  <div className="img rounded-full bg-white w-14 h-14 flex justify-center items-center">
                      <GiDiamondHard className='text-4xl'/>
                  </div>
                  <div className="info w-[90%] lg:w-[400px] text-center flex flex-col items-center">
                      <h2 className='font-bold text-3xl text-[#453227]'>Vision</h2>
                      <p className=' leading-7 mt-4 w-[100%] lg:w-[350px] text-[#5f4435] text-center'>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
                          ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi
                      </p>
                  </div>
              </div>

              <div className="box bg-[#c5a491] h-[330px] rounded-md flex flex-col items-center justify-center gap-6">
                  <div className="img rounded-full bg-white w-14 h-14 flex justify-center items-center">
                      <GiStabbedNote className='text-4xl'/>
                  </div>
                  <div className="info w-[90%] lg:w-[400px] text-center flex flex-col items-center">
                      <h2 className='font-bold text-3xl text-[#453227]'>History</h2>
                      <p className=' leading-7 mt-4 w-[100%] lg:w-[350px] text-[#5f4435] text-center'>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
                          ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi
                      </p>
                  </div>
              </div>


          </div>
    </section>
  )
}

export default SectionTwo