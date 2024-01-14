import React from 'react'

import { bill, card, apple, google } from '../assets';
import { styles, layout } from '../style'

const Product = () => {
  return (
    
    <>
      {/*part 1 */}
      <div className={` ${styles.margin} ${layout.section}`} id="product">
        <div className={` ${styles.sectionImg}`}>
          <img 
            src={bill}
            alt="bill img"
            className=''
          />
        </div>

        <div className={` ${styles.flexCenter} flex-col`}>
          <h2 className={` ${styles.heading2}`}> 
            Easily control your
            billing & invoicing
          </h2>
          <p className={` ${styles.paragraph} ${styles.marginY}`}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices 
            ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor 
            integer platea placerat.
          </p>

          <div className='flex flex-row   gap-6 '>
            <img 
              src={apple}
              alt="app store"
              className='w-full h-full cursor-pointer'
            />
            <img 
              src={google}
              alt="gooogle Play"
              className='w-full h-full cursor-pointer'
            />
          </div>
        </div>
      </div>

      {/* part2 */}

      <div className={` ${styles.margin} ${layout.sectionReverse}`}>
        
        <div className={`${styles.flexCenter} flex-col`}>
          <h2 className={`${styles.heading2}`}>
            Find a better card deal
            in few easy steps
          </h2>
          <p className={` ${styles.marginY} ${styles.paragraph}`}>
            Arcu tortor, purus in mattis at sed integer faucibus. 
            Aliquet quis aliquet eget mauris tortor.ç 
            Aliquet ultrices ac, ametau.
          </p>
          <div className={styles.flexCenter}>
            <button type="type" className='button p-4 '>
              Get Started
            </button>
          </div>
        </div>

        <div className={`${styles.sectionImg}`}>
          <img 
            src={card}
            alt="card image"
          />
        </div>
      </div>
    </>
  )
}

export default Product