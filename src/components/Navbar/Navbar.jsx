import React, { useState } from 'react';
import {images}  from '../../constants';
import {HiMenuAlt4, HiX } from 'react-icons/hi';
import {motion} from 'framer-motion';
import './Navbar.scss';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app_navbar  '>
      <div className='app_navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>

      <ul className='app_navbar-links'>
        {['Home','Contact','About','Work',"skills"].map((item)=>(
          //template string neechey

          <li className="app_flex p-text"  key={'link-${item}'}> 
            <div/>
            <a href={'#${item}'}>{item}</a>
          </li>

        ))}
      </ul>

      <div className='app_navbar-menu'> 
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
            <motion.div 
              whileInView={{ x: [300,0] }}
              transition={{duration:0.85, ease: 'easeOut'}}
            >
              <HiX onClick={()=> setToggle(false)}  />
              <ul>
              {['Home','Contact','About','Work',"skills"].map((item)=>(
              //template string neechey

          <li key={'link-${item}'}> 
            <a href={'#${item}'} onClick={()=>setToggle(true)}  >{item}</a>
          </li>
        ))}
        </ul>
              
              
            </motion.div>
          )
        }
      </div>
    </nav>
  );
}

export default Navbar
