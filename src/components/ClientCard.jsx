import React from 'react'

import { styles } from '../style';

const ClientCard = ({img, name, title, content}) => {
  return (
    <div className={`${styles.margin}`}>
      <div className='flex items-center'>
        <div className={`${styles.flexCenter} w-[100px] h-[100px]`}>
          <img 
            src={img}
            alt={name}
            className="w-2/3 h-2/3 rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className={styles.heading3}>{name}</h3>
          <p className={styles.paragraph}>{title}</p>
        </div>
      </div>

      <div>
        <p className={`${styles.paragraph} ${styles.marginY}`}>{content}</p>
      </div>
    </div>
  )
}

export default ClientCard