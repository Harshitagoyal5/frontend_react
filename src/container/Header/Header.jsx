import React from 'react'
import './Header.scss'; 
import { motion } from 'framer-motion';

import {images} from '../../constants';


const circleVariants={
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration: 1,
      ease: 'easeInOut'
    },
  },
};

const Header = () => {
  return (
    <div  id='home'  className='app_header app_flex'>
        <motion.div 
        whileInView={{x:[-100,0], opacity: [0,1]}}
        transition={{duration:0.5}}
        className='app_header-info'
        >
          <div className='app_header-badge'>
            <div className='badge-cmp app_flex'>
              <span>👋</span>
              <div style={{marginLeft: 20}}>
                <p className='p-text'> Hello, I am </p>
                <h1 className='head-text'>Harshita</h1>
              </div>
            </div >

            <div className='tag-cmp app_flex'>
              <p className='p-text'> Web Developer</p>
              <p className='p-text'>Coder</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{x:[-100,0], opacity: [0,1]}}
          transition={{duration:1}}
          className='app_header-img'>

          <img src={images.profile} alt="profile-bg" />

          <motion.img 
          whileInView={{scale : [0,1]}}
          transition={{duration:1, ease:'easeInOut'}}
          src={images.circles}
          alt="profile_circle"
          className='overlay_circle'/>

        </motion.div>

        <motion.div 
          variant={circleVariants}
          whileInView={circleVariants.whileInView}
          className='app_header-circles'
        >
          {[images.flutter, images.redux, images.sass].map((circle,index)=>(
            <div className='circle-cmp app_flex' key={'circle-${index}'}>
              <img src={circle} alt="profile_bg" />
            </div>
          ))}

        </motion.div>  
    </div>
  )
}

export default Header
