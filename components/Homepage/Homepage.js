
import styles from './styles.module.scss'
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
      
        <video muted id="myVideo" className={styles.homeVideo} loop ref={videoRef}>
        <source
          src={
           '/r-j-website.mp4'
             }
             type="video/mp4"
           />
      </video>  
      
      
    </section>
  );
};

export default Homepage;
