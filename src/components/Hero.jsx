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
        <p className={`${styles.paragraph} font-spacegrotesk text-[#BDBDBC] text-[16px] max-w-[580px] mt-2`}>
          The first accredited UNESCO Club in Mindanao since September 2011
        </p>

        <div className="flex flex-wrap justify-center mt-[40px]">

          <div className="relative w-[350px] h-[250px] md:w-[300px] md:h-[200px] sm:w-[200px] sm:h-[100px] rounded-lg overflow-hidden -mr-[10px] sm:-mr-[50px] mt-6 mb-6 ss:mb-0">
            <img src={img6} alt="" className="w-full h-full object-cover" />
            <div className="gradient-orange">
              <p className="font-spacegrotesk absolute bottom-4 left-0 right-0 text-center text-white text-lg">Volunteerism</p>
            </div>
          </div>

          <div className="relative w-[350px] h-[250px] sm:w-[250px] sm:h-[200px] md:w-[350px] md:h-[250px]  rounded-lg overflow-hidden z-10">
            <img src={img8} alt="" className="w-full h-full object-cover" />
            <div className="gradient-blue">
              <p className="font-spacegrotesk absolute bottom-4 left-0 right-0 text-center text-white text-lg">Peace Mediators</p>
            </div>
          </div>
          
          <div className="relative w-[350px] h-[250px] md:w-[300px] md:h-[200px] sm:w-[200px] sm:h-[100px] rounded-lg overflow-hidden -ml-[10px] sm:-ml-[50px] z-0 mt-6">
            <img src={img1} alt="" className="w-full h-full object-cover" />
            <div className="gradient-red">
              <p className="font-spacegrotesk absolute bottom-4 left-0 right-0 text-center text-white text-lg">Leadership</p>
            </div>
          </div>
      
        </div>


      </div>
    </section>
  );
};

export default Hero;
