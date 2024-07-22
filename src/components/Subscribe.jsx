import React from 'react';
import styles from '../style';

const Subscribe = () => {
  return (
    <section id="join-now" className={`flex flex-col md:flex-row ${styles.paddingY} justify-center items-center`}>
      <div className={`flex-1 ${styles.flexStart} relative flex-col xl:px-0 max-w-[1160px] sm:px-16 px-8 mb-10 justify-center items-center text-center`}>
        <h1 className="text-center font-spacegrotesk font-bold ss:text-[50px] text-[32px] text-white leading-tight w-full">
          Become a Peace Mediators Volunteer <br/>
        </h1>
        <p className={`${styles.paragraph} font-spacegrotesk text-[#BDBDBC] text-[16px] max-w-[800px] mt-2 leading-tight`}>
          Join our team of dedicated individuals working towards fostering peace and resolving conflicts within communities. 
        </p>
        <div className="w-full flex justify-center mt-10">
          <button
            className="font-spacegrotesk font-semibold text-[18px] rounded-[30px] px-12 py-3 text-sm text-white gradient-button">
            Register
          </button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe;
