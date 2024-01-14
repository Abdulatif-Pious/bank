import React from 'react'

import { styles } from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const FooterLink = ({ title, links }) => (
  <div>
    <h4 className={`${styles.heading4}`}>{title}</h4>
    {links.map((link) => (
      <a
        key={link.name}
        href={links.link}
        className={`${styles.paragraph} block cursor-pointer hover:text-[#1da1f2] hover:translate-x-[5px]`}
      >
        {link.name}
      </a>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className={`${styles.margin}`}>
      <div className='flex flex-wrap  justify-between gap-8 xl:gap-16 w-full'>
        <div>
          <div>
            <img 
              src={logo}
              alt="hoobank logo"
              className='w-[200px]'
            />
          </div>
          <p className={`${styles.paragraph} ${styles.marginY}`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        {footerLinks.map((footerLink, index) => (
          <FooterLink 
            key={`${footerLink.title}-${index}`}
            title={footerLink.title}
            links={footerLink.links}
          />
        ))}
      </div>

      <hr className='my-4'/>

      <div className="flex flex-col-reverse sm:flex-row justify-between gap-3">
        <p className={`${styles.paragraph} text-center`}>
          Copyright Ⓒ 2023 HooBank. All rights reserved.
        </p>
        <div className='flex gap-3 justify-center'>
            {socialMedia.map((item) => (
              <a
                key={item.id}
                href={item.link}
              >
                <img 
                  src={item.icon}
                  alt="socialmedia"
                  className='hover:scale-[1.2]'
                />
              </a>
            ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer