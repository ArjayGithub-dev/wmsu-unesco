import React from 'react'
import styles from '../style'
import { clarise } from '../assets'

const Administration = () => {
  return (
    <div className="flex flex-wrap justify-center mt-[60px] mb-[100px] gap-8">
      <p className="font-spacegrotesk font-regular text-[18px]">Administration </p>
        <div className="flex flex-row justify-center items-center text-center w-full mb-5">
           <h1 className="font-spacegrotesk font-bold ss:text-[36px] text-[26px] text-black">
              The Visionaries Behind Our Club
            </h1>
        </div>

        <div className="relative w-[320px] h-[350px] rounded-[10px] overflow-hidden">
          <img src={clarise} alt="" className="w-full h-full object-cover" />
          <div className="gradient-orange">
            <p className="font-spacegrotesk font-bold absolute bottom-12 left-0 right-0 text-center text-white text-[22px]">Name</p>
            <p className="font-spacegrotesk absolute bottom-4 left-0 right-0 text-center text-white text-lg">University President</p>
          </div>
        </div>

        <div className="relative w-[320px] h-[350px] rounded-[10px] overflow-hidden">
          <img src={clarise} alt="" className="w-full h-full object-cover" />
          <div className="gradient-blue">
            <p className="font-spacegrotesk font-bold absolute bottom-12 left-0 right-0 text-center text-white text-[22px]">Name</p>
            <p className="font-spacegrotesk absolute bottom-4 left-0 right-0 text-center text-white text-lg">PHSI Director</p>
          </div>
        </div>

        <div className="relative w-[320px] h-[350px] rounded-[10px] overflow-hidden">
          <img src={clarise} alt="" className="w-full h-full object-cover" />
          <div className="gradient-red">
            <p className="font-spacegrotesk font-bold absolute bottom-12 left-0 right-0 text-center text-white text-[22px]">Name</p>
            <p className="font-spacegrotesk absolute bottom-4 left-0 right-0 text-center text-white text-lg">Club President</p>
          </div>
        </div>
      </div>
      )
    }

export default Administration