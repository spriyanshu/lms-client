'use client';
import React, { FC, useEffect, useState } from 'react';
import Heading from './utils/Heading';
import Header from './components/Header';
import Hero from './components/Route/Hero';
import Courses from './components/Route/Courses';
import Reviews from './components/Route/Reviews';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer';
import { HeroHighlight } from './ui/hero-highlight';

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState('Login');

  return (
    <>
      <Heading
        title="CraftingBrain"
        description="CraftingBrain is a platform for students to Join Live.🚀 And Unlock Your Data Science Journey"
        keywords="Programming, Data Science,Machine Learning,Internship"
      />
      <div>
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <HeroHighlight>
          <Hero />
          <Courses />
          <Reviews />
          <FAQ />
          <Footer />
        </HeroHighlight>
      </div>
    </>
  );
};

export default Page;
