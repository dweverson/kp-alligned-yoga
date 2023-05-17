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
          <h2 className={`${styles.heading2} ${cinzel.className} ` }   >Yoga Teacher</h2>
          <h1 className={`${styles.heading1} ${cinzel.className} ` } >Welcome to KP Alligned Yoga</h1>
          <p className={`${styles.textmain} ${openSans.className}` }>
            Hi, I'm Kerry! I'm a 200 hours certified yoga teacher with a passion
            to help students find balance in their practice and their daily
            lives. <br /><strong>Connect with me @kpalignedyoga</strong>
          </p>
        </div>
        <Image
          src="/images/plant.png"
          alt="plant picture"
          width={300}
          height={400}
        />
      </div>
    </main>
  );
}
