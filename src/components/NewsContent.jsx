import React from 'react'
import styles from '../style'
import { img10 } from '../assets'


const NewsContent = () => {
  return (
    <div>
    <section id="about-us" className={`flex md:flex-row flex-col ${styles.paddingY} flex-col`}> 
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 mb-10 mt-10`}>
        <div className="flex flex-row justify-between items-center w-full mb-5">
          <h1 className="font-spacegrotesk font-bold ss:text-[36px] text-[26px] text-black">
            Making Difference ✨
          </h1>
        </div>
        <div className="flex relative">
        <p className={`${styles.paragraph} font-spacegrotesk font-regular text-gray w-full`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. 
        Gravida dictum fusce ut placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. 
        Gravida dictum fusce ut placerat usce ut placerat. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Gravida dictum fusce ut placerat</p>
        </div>
      </div>     
    </section>   

    <div className="container mx-auto mb-[80px]">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img10} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                claclassNamess="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default NewsContent