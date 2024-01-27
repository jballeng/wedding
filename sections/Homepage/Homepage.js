
import styles from './styles.module.scss'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { isMobile } from '../../utils/helpers'


const Homepage = () => {
  const videoRef = useRef();
  const router = useRouter()
  const mobile = isMobile()

  return (
    <section className={styles.contentFlex} id='home-content'>

      <div className='py-4 flex flex-col items-center'>
        <h2 className=''>
          Rehearsal Dinner
        </h2>
        <h3>
          April 17, 2024 | Markree Castle
        </h3>
      </div>
      <div className='py-4 flex flex-col items-center'>
        <h2 className=''>
          Wedding Ceremony & Reception
        </h2>
        <h3>
          April 18, 2024 | Markree Castle
        </h3>
      </div>


      <Image
        src={'/Video/r-j-website.gif'}
        alt='gif'
        height={388}
        width={600}
        priority
      />


    </section>
  );
};

export default Homepage;
