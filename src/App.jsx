import styles from "./style";
import { Navbar, Hero, AboutUs, LatestNews, Subscribe, Administration, Footer, CopyRight } from 
"./components";


const App = () => (

  // Fixed Navbar
  // <div className="w-full overflow-hidden">
  // <div className={`heroBg ${styles.paddingX} ${styles.flexCenter} w-full fixed top-0 left-0 z-50`}>
  //   <div className={`${styles.boxWidth}`}>
  //     <Navbar />
  //   </div>
  // </div>

  <div className="w-full overflow-hidden">
    <div className={`heroBg ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`heroBg ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>


    <div className={`bg-cream ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutUs /> 
        <LatestNews /> 
      </div>
    </div>

    <div className={`heroBg ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Subscribe /> 
      </div>
    </div>

    <div className={`bg-cream ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Administration /> 
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

export default App
