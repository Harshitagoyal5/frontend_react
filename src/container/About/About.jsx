import {motion} from 'framer-motion';
import React, {useState , useEffect} from 'react';
import {images} from '../../constants'
import './About.scss'; 
import { urlFor , Client } from '../../client';
/*statc DATA
const abouts=[
  {title: 'web-dev', description: " ia m a good developer", imgUrl: images.about01},
  {title: 'web-dev', description: " ia m a good developer", imgUrl: images.about02},
  {title: 'web-dev', description: " ia m a good developer", imgUrl: images.about03}
];*/

const About = () => {
  const[abouts,setAbouts]=useState([]);

  useEffect(()=>{
    const query='*[_type == "abouts"]';

    Client.fetch(query).then((data)=>{setAbouts(data);})
  },[]);

  return (
    <>

    <h2 className='head-text' >I know that <span>Good design</span>
    <br />
    makes
    <br />
    <span> Great Businesses</span>
    </h2>

    <div className='app_profiles'>
      {abouts.map((about,index)=>(

        <motion.div
        whileInView={{opacity:1}}
        whileHover={{scale:1.1}}
        transition={{duration:0.5, type: 'tween'}}
        className='app_profiles-item'
        key={about.title + index}
        >
          <img src={about.imgUrl} alt={about.title} />
          <h2 className='bold-text' style={{marginInTop: 20}}> {about.title} </h2>
          <p className='p-text' style={{marginInTop: 20}}> {about.description} </p>
        </motion.div>
      ))}

    </div>

    </>
  )
}

export default About;
