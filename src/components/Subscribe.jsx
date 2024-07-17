import React from 'react'
import styles from '../style';

const Subscribe = () => {
  return (
    <section id="join-now" className={`flex flex-col md:flex-row ${styles.paddingY} justify-center items-center`}>
      <div className={`flex-1 ${styles.flexStart} relative flex-col xl:px-0 max-w-[1160px] sm:px-16 px-8 mb-10 justify-center items-center text-center`}>
        <h1 className="text-center font-spacegrotesk font-bold ss:text-[50px] text-[40px] text-white leading-tight w-full">
          Subscribe to our newsletter for latest news and events <br/>
        </h1>
        <form className="mt-10 w-full flex justify-center">
          <div className="relative w-full max-w-lg">
            <label className="sr-only" htmlFor="email"> Email </label>
            <input
              className="font-spacegrotesk w-full rounded-[30px] bg-black border border-white text-white px-8 py-4 pe-32 text-sm font-medium"
              id="email"
              type="email"
              placeholder="Email"
            />
            <button
              className="font-spacegrotesk font-semibold text-[18px] absolute end-1 top-1/2 -translate-y-1/2 rounded-[30px] px-10 py-3 text-sm text-white gradient-button">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Subscribe
