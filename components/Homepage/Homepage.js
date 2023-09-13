
import styles from './styles.module.scss'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const Homepage = () => {
  const videoRef = useRef();
  const router = useRouter()
  
  useEffect(() => {
      setTimeout(()=>{
          videoRef?.current.play()
      },500)
  }, []);
  return (
    <section className={styles.contentFlex}>
      <Image
        src={'/Video/r-j-website.gif'}
        alt='gif'
        height={388}
        width={600}
        priority
      />

      <video muted id="myVideo" className={styles.homeVideo} loop ref={videoRef}>
        <source
          src={
            '/r-j-website.mp4'
          }
          type="video/mp4"
        />
        Your browser does not support the video tag
      </video>
    </section>
  );
};

export default Homepage;
