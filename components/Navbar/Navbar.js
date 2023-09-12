// components/Navbar.tsx
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const path = router.pathname
  
  

  return (

    <div className={styles.navLinksContainer}>

      <div className={styles.section}>
        <Image
          // className={styles.logo}
          src="/favicon/icon.webp"
          width={150}
          height={125}
          alt="Logo"
          priority
        />
      </div>
      <div className={styles.section}>
        <h1>
          JAKE &amp; REAGAN
        </h1>
        <h2>
          APRIL 18, 2024 <span>&#183;</span> IRELAND
        </h2>
      </div>
      <div className={styles.section}>
        <div className={styles.menuLinks}>
          <Link href="/" className={path == '/' ? 'active' : ''}>
            Home
          </Link>
          <Link href="/about" className={path == '/about' ? 'active' : ''} id={styles.aboutUs}>
            Our Story
          </Link>
          <Link href="/contact" className={path == '/contact' ? 'active' : ''} id="contactInfo">
            Contact Info
          </Link>
          <Link href="/faq" className={path == '/faq' ? 'active' : ''} id="faq">
            FAQ
          </Link>
        </div>
      </div>

    </div>

  );
};
export default Navbar;
