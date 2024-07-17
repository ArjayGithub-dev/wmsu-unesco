import styles from "../style";
import { img11 } from "../assets";

const LatestNews = () => {
  return (
    <div>
      <section id="about-us" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative mr-10`}>
          <img src={img11} alt="" className="w-[100%] h-[100%] rounded-xl border-2 border-[#F48401]" />
        </div>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-10`}>
          <p className="font-spacegrotesk font-regular text-[18px]">Latest News </p>
          <div className="flex flex-row justify-between items-center w-full mb-5">
            <h1 className="font-spacegrotesk font-bold ss:text-[36px] text-[26px] text-black">
              Making a difference
            </h1>
          </div>
          <p className={`${styles.paragraph} font-spacegrotesk font-regular text-gray max-w-[520px] mb-10`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Gravida dictum fusce ut placerat.
          </p>

          {/* Input box and button */}
          <div className="flex w-full sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <button className="font-spacegrotesk font-semibold gradient-button sm:w-auto px-10 py-3 text-white rounded-[30px] bg-blue focus:outline-none ">
              Read More
            </button>
          </div>
        </div>

      </section>
    </div>
  );
};

export default LatestNews;
