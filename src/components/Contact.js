import React,{useRef,useState} from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import  emailjs, { send } from '@emailjs/browser';

const Result = () =>{
  return(
    <p>Your message has been sent successfully.</p>
  )
}
const Contact = () => {
  const [result,setResult] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_de3xpou', 'template_1uv3729', form.current, {
        publicKey: '308ihQVwZB9IR_8qt',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
      setResult(true)
  };
  return (
    <section  className='py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div variants={fadeIn('right',0)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.3}} className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-x1 uppercase text-accent font-medium mb-2'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br/> together!
              </h2>
            </div>
          </motion.div>
          <motion.form ref={form} onSubmit={sendEmail} variants={fadeIn('left',0)} initial='hidden' whileInView='show' viewport={{once:false,amount:0.3}} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input type="text" name="fullname" className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" placeholder='Your name' required />
            <input type="email" name="email" className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" placeholder='Your email' required />
            <textarea name="message" className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12" placeholder='Your message' required></textarea>
            <input type="submit" value='send message' className="btn btn-lg"/>
            <div>{result ? <Result/> : null}</div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
