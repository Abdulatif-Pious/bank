import React from 'react'

import {  feedback, clients } from '../constants';
import { styles, layout } from '../style'
import { ClientCard } from '../components'; 


const Clients = () => {
  return (
    <>
    {/* part 1*/}
      <section className={`${styles.margin}`} id="clients">
        <div className='flex flex-col xl:flex-row items-center justify-between w-full'>
          <h2 className={`${styles.heading2}`}>
            What People are saying about us
          </h2>
          <p className={`${styles.paragraph} xl:${styles.margin}`}>
            Everything you need to accept card payments 
            and grow your business anywhere on the planet.
          </p>
        </div>
        
        <div className={` ${styles.marginY} flex flex-col xl:flex-row   justify-between w-full`}>
          {feedback.map((item) => (
            <ClientCard 
              key={item.id}
              name={item.name}
              img={item.img}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
        <div className='flex flex-wrap gap-6  justify-center sm:justify-between items-center'>
          {clients.map((client) => (
            <img
              key={client.id}
              src={client.logo}
              alt="client img"
              className='w-[100px] sm:w-[200px] h-[80px]'
            />
          ))}
        </div>
      </section>

        {/* part 2 */}
        <div className={`${styles.margin} ${layout.section}`}>
            <div className={` ${styles.flexCenter} flex-col w-full`}>
              <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
              <p className={`${styles.paragraph} ${styles.paddingY}`}>
                Everything you need to accept card payments and grow your business anywhere on the planet.
              </p>
            </div>
            <div className='flex items-center justify-center w-full'>
              <button type="button" className='button p-4'>
                Get started  
              </button> 
            </div>
        </div>
    </>
    
  )
}

export default Clients