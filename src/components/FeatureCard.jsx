import React from 'react'

import { styles } from '../style'

const FeatureCard = ({ title, icon, content }) => {
  return (
    <div className={` ${styles.paddingY} ${styles.flexCenter} w-full `}>
      <div>
        <div className={` ${styles.flexCenter} w-[50px] h-[50px] rounded-full bg-black`}>
          <img 
            src={icon}
            alt="icon"
            className='w-1/2 h-1/2'
          />
        </div>
      </div>
      

      <div className={`ml-4`}>
        <h4 className={`${styles.heading4}`}>{title}</h4>
        <p className={`${styles.paragraph}`}>{content}</p>
      </div>
    </div>
  )
}

export default FeatureCard