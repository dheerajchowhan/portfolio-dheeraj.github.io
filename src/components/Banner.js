/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// images
import Image from '../assets/dheeraj.png';
// icons
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa';
// type animations
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh]'flex items-center id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up',0.3)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              DHEERAJ<div>CHOWHAN</div>
            </motion.h1>
            <motion.div variants={fadeIn('up',0.4)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={['Web Developer',2000,'Student',2000]} speed={50} className='text-accent' wrapper='span' repeat={Infinity} />
            </motion.div>
            <motion.p variants={fadeIn('up',0.5)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>
              I am a second year undergraduate student of Civil Engineering department at Indian Institute of Technology,Kharagpur.
            </motion.p>
            <motion.div variants={fadeIn('up',0.6)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}} className='flex gap-x-6 max-w-max items-center mb-12 mx-auto lg:mx-0'>
              <button className="btn btn-lg mr-4">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            <motion.div variants={fadeIn('up',0.7)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}} className='flex flex-row text-[20px] gap-x-6 max-w-max ml-4'>
              <a href='https://www.facebook.com/profile.php?id=100007246215699'><FaFacebook/></a>
              <a href='https://www.linkedin.com/in/dheeraj-chowhan-b84758259/'><FaLinkedin/></a>
              <a href='https://www.instagram.com/_dheerajchowhan/?igshid=MmIzYWVlNDQ5Yg%3D%3D'><FaInstagram/></a>
              <a href="https://codepen.io/Sabavath-Dheeraj-Chowhan"><FaCodepen /></a>
              <a href="https://github.com/dheeraj2014"><FaGithub /></a>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('down',0.5)} initial='hidden' whileInView='show' className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img id='image'src={Image} alt=''/>
          </motion.div>
        </div>
      </div>
    </section>
  )
};



export default Banner;

