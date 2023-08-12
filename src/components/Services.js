import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const schools=[
  {
    insti:'Indian Institute of Technology, Kharagpur',
    course:'Bachelor of Technology - BTech Civil Engineering',
    link:'Learn More',
    url:'https://www.narayanagroup.com/',
  },
  {
    insti:'Narayana Junior College Hyderabad,India',
    course:'XII-Physics,Chemistry,Mathematics -  2020-22',
    link:'Learn More',
    url:'https://davbistupur.org/',
  },
  {
    insti:'Sri Chaitanya School - Hydearbad,India',
    course:'Class X - 2020',
    link:'Learn More',
    url:'https://srichaitanyaschool.net/',
  }
]

const Education = () => {
  return(
    <section className='section' id='education'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div variants={fadeIn('right',0)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}} className='flex-1 bg-services bg-contain items-right lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-1 mx-7 '>EDUCATION</h2>
            <h4 className="h4 max-w-[500px] mb-20 mx-7 text-slate-950">An investment in knowledge pays the best interest.</h4>
            <a href='https://www.iitkgp.ac.in/'><button className='btn btn-sm mx-7'>See my College</button></a>
          </motion.div>
          <motion.div variants={fadeIn('left',0)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}}>
            <div>
              {schools.map((school,index)=>{
                const {insti,course,link,url}=school;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-{38px} flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{insti}</h4>
                      <p className='font-secondary leading-tight'>{course}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight/>
                      </a>
                      <a href={url} className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  ); 
};

export default Education;
