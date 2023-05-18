import Image from "next/image";
import styles from "./page.module.css";
import { Cinzel, Open_Sans } from "@next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main>
      <div className="content-container">
        <div className="text">
          <h2 className={`${styles.heading2} ${cinzel.className}`}>
            Yoga Teacher
          </h2>
          <h1 className={`${styles.heading1} ${cinzel.className}`}>
            Welcome to <br />KP Alligned Yoga
          </h1>
          <p className={`${styles.textmain} ${openSans.className}`}>
            Hi, I'm Kerry! I'm a 200 hours certified yoga teacher with a passion
            to help students find balance in their practice and their daily
            lives. <br />
            <p>&nbsp;</p>
            <strong>Connect with me @kpalignedyoga</strong>
          </p>
        </div>
        <div className='plantContainer'>
        <Image
          src="/images/plant.png"
          alt="plant picture"
          // width={100}
          // height={100}
          fill    
          className="plant"      
                 />
          </div>
        <div className={styles.offer}>
          <h2 className={`${styles.heading2} ${cinzel.className}`}>What I offer</h2>
        </div>
        <div className={styles.accordion}>
          <ul className={`${styles.heading2} ${cinzel.className}`}>
            <li>Morning Zoom Yoga</li>
            <li>Community</li>
            <li>Private Classes</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
