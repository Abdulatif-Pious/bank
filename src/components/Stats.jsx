import React from 'react'

import { styles } from '../style';

const Stats = ({ title, value }) => {
  return (
    <div className={`${styles.flexCenter} ${styles.heading3}  basis-1/3`}>
      <h3>
        {value}
      </h3>
      <span className='text-gradient ml-2'>
          {title}
        </span>
    </div>
  )
}

export default Stats