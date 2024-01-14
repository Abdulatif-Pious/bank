import React from 'react'

import { styles, layout } from '../style';
import { features } from '../constants';
import { FeatureCard } from '../components';

const Features = () => {
  return (
    <section className={`${layout.section} ${styles.margin}`} id="features">
      <div className={`${styles.flexCenter} flex-col`}>
        <h2 className={`${styles.heading2}`}>
          You do the business,
          we’ll handle the money
        </h2>
        <p className={` ${styles.paragraph} ${styles.marginY} `}>
          With the right credit card, you can improve your 
          financial life by building credit, earning 
          rewards and saving money. But with hundreds 
          of credit cards on the market.
        </p>
        <div>
          <button type="button" className="p-4 button">
            Get started
          </button>
        </div>
      </div>

        <div className={` ${styles.sectionImg}`}>
        {features.map((feature) => (
          <FeatureCard 
            key={feature.id}
            title={feature.title}
            icon={feature.icon}
            content={feature.content}
          />
        ))}
      </div>
    </section>
  )
}

export default Features