import React from 'react'
import styles from '../style'
import { quote } from '../assets'
import Administration from './Administration'

const AboutContent = () => {
  return (
    <div>
    <section id="about-us" className={`flex md:flex-row flex-col ${styles.paddingY} flex-col`}> 
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mb-10`}>
        <div className="flex flex-row justify-between items-center w-full mb-5">
          <h1 className="font-spacegrotesk font-bold ss:text-[36px] text-[26px] text-black">
            Our Vision ✨
          </h1>
        </div>
        <div className="flex relative">
        <img src={quote} alt="" className="w-[50px] absolute top-0 left-0" />
        <p className={`${styles.paragraph} font-spacegrotesk font-regular text-gray w-full mb-10 ml-[90px]`}>
        The club shall be a group spearheaded by the students of the
        Western Mindanao State University with multi-cultural and multi-religious backgrounds,
        seeking knowledge together in peace, camaraderie, unity, and solidarity. The club envision
        to have a peaceful, conflict-free environment for both teachers and students and build a
        culture of peace not just in WMSU community but all throughout the region and the country. </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full mb-5">
          <h1 className="font-spacegrotesk font-bold ss:text-[36px] text-[26px] text-black">
            Our Mission 🕊️
          </h1>
        </div>
        <div className="flex">
        <p className={`${styles.paragraph} font-spacegrotesk font-regular text-gray w-full mb-2`}>
        The club shall serve as a catalyst in:</p>
        </div>
        <ul className="list-disc ml-[90px] ul-dots">
            <li>
                Bringing together the students of diverse background in the university to work for
                the common good and help promote a network of young leaders who could be
                committed and productive members of their families, community, institution, and
                society;
            </li>
            <li>
                Fostering the spirit of volunteerism and solidarity as a concrete presentation of love
                and service to others; and
            </li>
            <li>
                Promoting Western Mindanao State University as a peace zone university and;
            </li>
            <li>
                Building a culture of Peace through honing WMSU students to be a peace advocate in their
                own community.
            </li>
        </ul>
        <div className="flex flex-row justify-between items-center w-full mb-5 mt-12">
          <h1 className="font-spacegrotesk font-bold ss:text-[36px] text-[26px] text-black">
            Goals and Objectives ☮️
          </h1>
        </div>
        <ul className="list-disc ml-[90px] ul-dots">
            <li>
            To advocate and participate in the different peace activities whether in or out of the
            campus;
            </li>
            <li>
            To train these peace advocates to be a committed and productive members of the
            WMSU family through different training, workshops and seminars on peace
            education; campus;
            </li>
            <li>
            To impart positive values and perception among WMSU students to help them
            motivate their social transformation through its projects and programs.
            </li>
            <li>
            To conceptualize programs and plan of action in the line of peace works that are
            envisioned in building a community of peace and child-friendly environment or
            campus;
            </li>
            <li>
            To participate interfaith and intercultural dialogue and exchange in the different
            dialogue for understanding sessions;
            </li>
            <li>
            And to teach and train other WMSU students to become committed and productive
            members of the WMSU community and eventually would lead them to become an
            agents of peace in our locale vicinity.
            </li>
        </ul>
      </div>      
    </section>
  </div>
  )
}

export default AboutContent