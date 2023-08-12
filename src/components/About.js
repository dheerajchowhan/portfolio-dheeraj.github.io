import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref,inView]=useInView({
    threshold:0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div variants={fadeIn('right',0)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}} className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
          <motion.div variants={fadeIn('left',0)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.7}} className='flex-1'>
            <h2 className='h2 text-accent'>About Me</h2>
            <h3 className='h3 mb-4'>I am a college student</h3>
            <p className='mb-6'>I am a second year undergraduate student of the department of Civil Engineering at Indian Institute of Technology, Kharagpur. 
            I'm a graphic designer, illustrator and webdesigner creating awesome and
            effective visual identities. Let's start scrolling and learn more about me.</p>
            <div className='flex gap-x-9 lg:gap-x-10 mb-12'>
              <div>
                
              </div>
              <div>
                <div className='text-[36px] font-tertiary text-gradient mb-2 mt-2'>
                  {inView?<CountUp start={0} end={2} duration={3} /> : null}
                  nd
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Year of <br/>
                  College
                </div>
              </div>
              <div>
                <div className='text-[36px] font-tertiary text-gradient mb-2 mt-2'>
                  {inView?<CountUp start={0} end={365} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Days of <br/>
                  Learning
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
