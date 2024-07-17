import React from "react";
import styles from "../style";
import { Navbar, AboutContent, PageHero, Footer, CopyRight,} from "../components";


const AboutPage = () => (
  
  <div className="w-full overflow-hidden">
    <div className={`heroBg ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>  

    <div className={`${styles.paddingX} ${styles.flexCenter} heroBg`}>
      <div className={`${styles.boxWidth}`}>
        <PageHero />
      </div>
    </div> 

    <div className={`${styles.paddingX} ${styles.flexCenter} bg-cream`}>
      <div className={`${styles.boxWidth}`}>
        <AboutContent />
      </div>
    </div>  

    <div className={`heroBg ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer /> 
      </div>
    </div>

    <div className={`bg-cream ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <CopyRight /> 
      </div>
    </div>
    
    </div>
);

export default AboutPage
