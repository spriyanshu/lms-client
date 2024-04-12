import React from 'react';
import { styles } from '../styles/style';

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        Hello! We are <span className="text-gradient">CraftingBrain</span>
      </h1>

      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          CraftingBrain is an online transformative upskilling platform for
          working tech professionals. Our industry-vetted approach towards
          teaching & training young professionals not only helps them upskill
          but also #CreateImpact in the real world. We are devoted to creating
          an ecosystem that nurtures our learners and assists them in unlocking
          talent, skills & opportunities at every stage of their careers.
          Learners enrolled with us are taught, guided, and mentored by industry
          veterans and experts from leading tech organisations, including
          Google, Meta, Netflix, Microsoft, Amazon, Hotstar, Twitter etc. .
          <br />
          <br />
          CraftingBrain aims to effectively enhance the skills of tech
          professionals with an industry-vetted approach. We are on a mission to
          create 1M+ world-class tech professionals by providing them with
          exceptional mentorship and relevant course material to #CreateImpact.
          <br />
          <br />
          Our YouTube channel is a treasure trove of informative videos on
          everything from programming basics to advanced techniques. But
          that&apos;s just the beginning. Our affordable courses are designed to
          give you the high-quality education you need to succeed in the
          industry, without breaking the bank.
          <br />
          <br />
          AtCraftingBrain, we believe that price should never be a barrier to
          achieving your dreams. That&apos;s why our courses are priced low
          &ndash; so that anyone, regardless of their financial situation, can
          access the tools and knowledge they need to succeed.
          <br />
          <br />
          ButCraftingBrain is more than just a community &ndash; we&apos;re a
          family. Our supportive community of like-minded individuals is here to
          help you every step of the way, whether you&apos;re just starting out
          or looking to take your skills to the next level.
          <br />
          <br />
          WithCraftingBrain by your side, there&apos;s nothing standing between
          you and your dream job. Our courses and community will provide you
          with the guidance, support, and motivation you need to unleash your
          full potential and become a skilled programmer.
          <br />
          <br />
          So what are you waiting for? Join theCraftingBrain family today and
          let&apos;s conquer the programming industry together! With our
          affordable courses, informative videos, and supportive community, the
          sky&apos;s the limit.
        </p>
        <br />
        <span className="text-[22px]">xyz&apos;s</span>
        <h5 className="text-[18px] font-Poppins">
          Founder and CEO ofCraftingBrain
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
