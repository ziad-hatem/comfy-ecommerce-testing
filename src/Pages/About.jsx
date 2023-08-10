import React from 'react'
import  deskTopImage  from '../assets/hero-bcg.jpeg'
import PageHero from '../components/PageHero'

const About = () => {
  return (
      <>
      <PageHero title={'About'} />
      <section className='flex gap-14 flex-col lg:flex-row justify-center items-center lg:h-[90vh]'>
          <div className="image mt-9">
              <img
                  src={deskTopImage}
                  alt="Nice desktop"
                  className='lg:w-[450px] w-[98%] m-auto mt-10'
                  width={'450px'}
              />
          </div>
          <div className="info mb-8 lg:mb-0 lg:h-[500px] w-[350px]">
              <div className="header ml-6 flex flex-col justify-center items-start mb-10">
                <div className="text-4xl font-bold" color='#102a42'>Our Story</div>
                <div className="underLine bg-[#ab7a5f] w-20 h-1 mt-2 ml-1"></div>
            </div>
              <p className='lg:w-[400px] w-[320px] ml-6 lg:ml-8 lg:m-0'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
                  delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore,
                  obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex,
                  eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex,
                  voluptate accusamus nesciunt totam vitae esse iste.
              </p>
          </div>
    </section>
      </>
  )
}

export default About