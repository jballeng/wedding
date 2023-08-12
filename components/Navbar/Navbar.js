// components/Navbar.tsx
import { React, useRef, useState, useEffect } from "react";
import styles from "./styles.module.css";

import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const { route, pathname } = useRouter();

  return (
    <header className={styles.navbar}>
      <div className={styles.navLinksContainer}>
        <div className={styles.titleLink}>
          <Link href="/" className={styles.titleFlexLink}>
            <p>Jake</p>
            <p>&</p>
            <p>Reagan</p>
          </Link>
        </div>
        <div className={styles.menuLinks}>
        <Link href="/about" className={styles.navLinks}>
          About Us
        </Link>
        <Link href="/contact" className={styles.navLinks}>
          Contact Info
        </Link>
        <Link href="/faq" className={styles.navLinks}>
          FAQ
        </Link>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
