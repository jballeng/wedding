import Image from "next/image";
import styles from './styles.module.css'
import React, { useEffect, useRef } from 'react';


const Homepage = () => {
  const videoRef = useRef();
  
  useEffect(() => {
      setTimeout(()=>{
          videoRef.current.play()
      },1000)
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
      {/* <Image 
        src='/laughing-pic.webp'
        width={250}
        height={250}
        alt="Picture of the author"
      /> */}
        
     
    </section>
  );
};

export default Homepage;
