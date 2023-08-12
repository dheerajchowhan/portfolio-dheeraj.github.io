import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Services';
import Skills from './components/Work';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <About />
      <Education />
      <Skills />
      <Nav />
      <Contact />
      <div className='h-[100%]'></div>
    </div>
  );
};

export default App;
