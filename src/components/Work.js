import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import WebD from '../assets/web.jpeg';
import coding from '../assets/coding.jpeg';
import marketing from '../assets/marketing.jpeg';

const Skills = () => {
  return (
    <section className='section' id='skills'>
      <div className='container mx-auto mt-5'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div variants={fadeIn('right',0)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}} className='flex-1 flex flex-col gap-y-32 mb-10 lg:mb-0'>
            <div>
              <h2 className='h2 leading-tight'>My Skills</h2>
              <p className="max-w-sm mb-16">These are some of the skill-sets which I am trying to explore and learn.</p>
              <button className='btn btn-sm'>View All Projects</button>
            </div>
            <div className='group relative overflow-hidden border-white/50 rounded-lg'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={WebD} alt=''/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 trasition-all duration-500 z-50'>
                <span className='text-gradient'>Web Development</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 trasition-all duration-700 z-50'>
                <span className='text-3x1 text-white' >HTML, CSS, JavaScript, ReactJS</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left',0)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div className='group relative overflow-hidden  border-white/50 rounded-lg'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={coding} alt=''/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 trasition-all duration-500 z-50'>
                <span className='text-gradient'>Programming</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 trasition-all duration-700 z-50'>
                <span className='text-3x1 text-white' >C, C++, Python</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-white/50 rounded-lg'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={marketing} alt=''/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 trasition-all duration-500 z-50'>
                <span className='text-gradient'>Marketing</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 trasition-all duration-700 z-50'>
                
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
