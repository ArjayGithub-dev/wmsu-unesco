import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from "../style";

const PageHero = () => {

  const location = useLocation();
  const path = location.pathname;

  let content = 'About Us';
  if (path === '/ProjectsPage') {
    content = 'Projects';
  } else if (path === '/NewsletterPage') {
    content = 'Newsletter';
  }
  else if (path === '/ContactPage') {
    content = 'Contact';
  }
  

  return (
  <>
    <section id="pagetitle" className={`flex flex-col md:flex-row ${styles.paddingY} justify-center items-center`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-10 justify-center items-center text-center`}>
        <div className="flex flex-col justify-center items-center w-full mb-5">
          <h1 className="ss:text-[62px] text-[42px] text-white leading-tight">
            <span className="font-spacegrotesk font-black">{content}</span> 
          </h1>
        </div>
        <p className={`${styles.paragraph} font-spacegrotesk text-[#BDBDBC] text-[16px] max-w-[800px] mt-2`}>
        The <span className="font-bold text-white">WMSU Youth Peace Mediators - UNESCO Club </span> is an organization that is under the supervision of the 
        <span className="font-bold text-white"> WMSU Peace and Human Security Institute</span>, that aims to be a medium of peace and a bridge towards unity,
        fostering the spirit of volunteerism and solidarity in service to tother.
        </p>
      </div>
    </section>
  </>
  );
};

export default PageHero;
