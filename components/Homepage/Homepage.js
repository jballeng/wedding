
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
    <section className={styles.contentFlex}>
        <Image
          src={'/Video/r-j-website.gif'}
          alt='gif'
          height={388}
          width={600}
          priority
        />
        <h2>
          EVENT DETAILS COMING SOON
        </h2>
    </section>
  );
};

export default Homepage;
