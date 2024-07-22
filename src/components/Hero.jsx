import React from 'react';
import styles from "../style";
import { img1, img6, img8 } from '../assets';

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY} justify-center items-center`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-10 justify-center items-center text-center`}>
        <div className="flex flex-col justify-center items-center w-full mb-5">
          <h1 className="ss:text-[62px] text-[32px] text-white leading-tight">
            <span className="font-spacegrotesk font-black">WMSU Youth Peace Mediators - </span> <br />
            <span className="font-spacegrotesk font-black">UNESCO Club </span> <br />
          </h1>
        </div>
        <p className={`${styles.paragraph} font-spacegrotesk text-[#BDBDBC] text-[16px] max-w-[580px] mt-2 mb-8`}>
          The first accredited UNESCO Club in Mindanao since September 2011
        </p>
        <div className="video-container w-auto">
          <iframe 
            className="sm:w-[580px] sm:h-[315px]"
            src="https://www.youtube.com/embed/ZJBCfRvxcus?si=_Nnut95BB3Rm-kis" 
            title="Promotional Video from previous Peace Mediators"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;
