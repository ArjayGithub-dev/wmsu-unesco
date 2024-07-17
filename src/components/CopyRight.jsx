import React from 'react'
import styles from '../style'

export const CopyRight = () => {
  return (
    <section className={`${styles.flexCenter} sm:py-8 py-4 flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col w-full`}>
            <div className="bg-cream flex justify-between items-center md:flex-row flex-col">
                <p className="font-spacegrotesk font-normal text-center text-[14px] text-gray">
                     Copyright © 2024 <span className="font-semibold underline underline-offset-4"> WMSU Youth Peace Mediators - UNESCO Club, </span> All rights reserved.
                </p>
             </div>
        </div>
    </section>
  )
}

export default CopyRight;