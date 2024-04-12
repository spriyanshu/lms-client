'use client';
import React, { useState } from 'react';
import Heading from '../utils/Heading';
import Header from '../components/Header';
import About from './About';
import Footer from '../components/Footer';

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(2);
  const [route, setRoute] = useState('Login');

  return (
    <div>
      <Heading
        title="About us - CraftinBrain"
        description="CraftinBrain is Data Science Internship Program."
        keywords="programming,Data Science,Internship"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <About />
      <Footer />
    </div>
  );
};

export default Page;
