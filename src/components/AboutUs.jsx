import styles from "../style";
import { img3 } from "../assets";
import { Link, useLocation } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <section id="about-us" className={`flex md:flex-row flex-col ${styles.paddingY} flex-col-reverse`}>
        
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-10`}>
          <p className="font-spacegrotesk font-regular text-[18px]">About Us </p>
          <div className="flex flex-row justify-between items-center w-full mb-5">
            <h1 className="font-spacegrotesk font-bold ss:text-[36px] text-[26px] text-black">
              Creating a better future  <br />  Generation
            </h1>
          </div>
          <p className={`${styles.paragraph} font-spacegrotesk font-regular text-gray max-w-[620px] mb-10`}>
          The <span className="font-bold text-black">WMSU Youth Peace Mediators - UNESCO Club </span> is an organization that is under the supervision of the 
        <span className="font-bold text-black"> WMSU Peace and Human Security Institute</span>, that aims to be a medium of peace and a bridge towards unity,
        fostering the spirit of volunteerism and solidarity in service to tother.
          </p>
          {/* button */}
          <div className="flex w-full sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <li className="list-none font-spacegrotesk font-semibold gradient-button sm:w-auto px-10 py-3 text-white rounded-[30px] focus:outline-none ">
              <Link to="/AboutPage">Read More</Link>
            </li>
          </div>
        </div>

        <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={img3} alt="" className="w-[100%] h-[100%] rounded-xl border-2 border-[#F48401]" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
