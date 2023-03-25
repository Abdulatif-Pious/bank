import React, { useState} from 'react'
import { styles } from '../style';
import { logo, close, menu } from '../assets';
import { navLinks }   from '../constants';

const NavLink = ({ title, id, mobileMenu}) => (
  <li>
    <a
      href={`#${id}`}
      className={`flex justify-center text-base md:text-lg 2xl:text-xl cursor-pointer hover:text-[#1da1f2] ${mobileMenu && styles.paddingY} ${mobileMenu ? 'hover:bg-white rounded-full' : 'text-secondary-color hover:scale-[1.1]'}`}
    >
      {title}
    </a>
  </li>
);

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className={`${styles.paddingX} flex justify-between items-center w-full`}>
      <div className='flex items-center  w-[250px] h-[50px] '>
        <a href="/">
          <img 
          src={logo}
          alt="HooBank logo"
          className="w-1/2 h-1/2 cursor-pointer"
        />
        </a>
      </div>
      <ul className='md:flex hidden items-center gap-4'>
        {navLinks.map((link) => (
          <NavLink 
            key={link.id}
            title={link.title}
            id={link.id}
          />
        ))}
      </ul>
      
      {/* mobile menu */}
      <div className='block md:hidden'>
        {!mobileMenu && (
            <img 
              src={menu}
              alt="menu"
              className='cursor-pointer hover:scale-[1.2]'
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          )}
          
          {mobileMenu && (
            <div className="flex flex-col  fixed inset-0  w-3/5 min-h-screen overflow-y-auto bg-gray-300">
              
              <div className={`flex items-center justify-between  w-full ${styles.paddingX}`}>
                <div className='flex items-center w-[150px] h-[50px]'>
                  <img 
                    src={logo}
                    alt="HooBank logo"
                    className="w-1/2 h-1/2 cursor-pointer hover:scale-[1.2]"
                  />
                </div>

                <img 
                    src={close}
                    alt="close"
                    className='cursor-pointer hover:scale-[1.2]'
                    onClick={() => setMobileMenu(!mobileMenu)}
                  />
              </div>

              <ul 
                onClick={() => setMobileMenu(false)}   
                className={`${styles.margin} `}
              >
                {navLinks.map((link) => (
                <NavLink
                  key={`${link.title}-${link.id}`}
                  title={link.title}
                  id={link.id}
                  mobileMenu
                />
                ))} 
              </ul>
          </div>
          )}
      </div>
    </nav>
  )
}

export default Navbar