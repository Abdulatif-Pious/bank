import React from 'react'

import  { styles, layout }  from '../style';
import { robot } from '../assets';
import { stats } from '../constants';
import { Stats } from '../components';

const Hero = () => {
  return (
    <section className={`${styles.margin} `} id="home">
      <div className={`${layout.section}`}>
        <div className={`${styles.flexCenter} flex-col w-full`}>
          <h2 className={`${styles.heading2}`}>
            The Next
            {" "}
              <span className='text-gradient'>Generation</span> 
            {" "}<br />
            Payment Method
          </h2>
          <p className={`${styles.paragraph} ${styles.marginY}`}>
            Our team of experts uses a methodology to 
            identify the credit cards most likely to 
            fit your needs. We examine annual percentage 
            rates, annual fees.
          </p>
        </div>
        <div className={`${styles.sectionImg}`}>
          <img 
            src={robot}
            alt="robot"
            className='w-full h-full'
          />
        </div>
      </div>

      <div className={`flex flex-col  md:flex-row  gap-4 md:gap-0   justify-between flex-wrap w-full`}>
        {stats.map((stat) => (
          <Stats 
            key={stat.id}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero