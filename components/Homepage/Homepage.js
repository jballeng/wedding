
import styles from './styles.module.scss'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { isMobile } from '../../utils/helpers'

const Homepage = () => {
  const videoRef = useRef();
  const router = useRouter()
  const mobile = isMobile()

  // useEffect(() => {
  //   setTimeout(() => {
  //     videoRef?.current.play()
  //   }, 100)
  // }, []);
  return (
    <section className={styles.contentFlex}>
      {/* {!mobile ? (
        <video muted id="myVideo" className={styles.homeVideo} loop ref={videoRef}>
          <source
            src={
              '/r-j-website.mp4'
            }
            type="video/mp4"
          />
          Your browser does not support the video tag
        </video>
      ) : ( */}
        <Image
          src={'/Video/r-j-website.gif'}
          alt='gif'
          height={388}
          width={600}
          priority
        />
      {/* )} */}



    </section>
  );
};

export default Homepage;
