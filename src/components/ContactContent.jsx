import React from 'react';
import styles from '../style';

const ContactContent = () => {
  return (
    <div>
      <section id="about-us" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex ${styles.flexStart} flex-col sm:flex-row xl:px-0 sm:px-16 px-6 mb-10 gap-10`}>
          <div className="flex-1">
            <p className={`${styles.paragraph} font-spacegrotesk font-regular text-gray w-full mb-2`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. 
            </p>
            <ul className="list-disc ml-4">
              <li>wmsuunescoblub@gmail.com</li>
              <li>+63 028940283</li>
            </ul>
          </div>

          <div className="flex-1 w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.23037138706!2d122.0613726!3d6.9135942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325041dd7a24816f%3A0x51af215fb64cc81a!2sWestern%20Mindanao%20State%20University!5e0!3m2!1sen!2sph!4v1721633968762!5m2!1sen!2sph" 
              className="border-0 rounded-xl w-full h-[350px] sm:w-[580px] sm:h-[400px]" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactContent;
