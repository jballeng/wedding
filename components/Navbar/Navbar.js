
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
          src="/favicon/icon.webp"
          width={150}
          height={156}
          alt="Logo"
          priority
        />
      </div>
      <div className={styles.section}>
        <h1>
          JAKE &amp; REAGAN
        </h1>
        <h2>
          APRIL 18, 2024 <span>&#183;</span> MARKREE CASTLE
        </h2>
      </div>
      <div className={styles.section}>
        <div className={styles.menuLinks} id='menu-links'>
          
          <Link href="/about" className={path == '/about' ? 'active' : ''} id={styles.aboutUs}>
            Our Story
          </Link>
          <Link href="/travel" className={path == '/travel' ? 'active' : ''} id={styles.aboutUs}>
            Travel & Stay
          </Link>
          <Link href="/events" className={path == '/events' ? 'active' : ''} id={styles.aboutUs}>
            Event Details
          </Link>
          <Link href="/registry" className={path == '/registry' ? 'active' : ''} id="registry">
            Registry
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
