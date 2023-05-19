import Image from "next/image";
import styles from "./page.module.css";
import { Cinzel, Open_Sans } from "@next/font/google";
import Accordion from "../../components/Accordion";

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});


export const accordionData = [
  {
    title: 'Morning Zoom Yoga',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`
  },
  {
    title: 'Community',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`
  },
  {
    title: 'Private Classes',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`
  }
];

export default function Home() {
  return (
    <main>
      <div className={`${styles.contentContainer}`}>
        <div className={`${styles.text}`}>
          <h2 className={`${styles.heading2} ${cinzel.className}`}>
            Yoga Teacher
          </h2>
          <h1 className={`${styles.heading1} ${cinzel.className}`}>
            Welcome to <br />
            KP Alligned Yoga
          </h1>
          <p className={`${styles.textmain} ${openSans.className}`}>
            Hi, I'm Kerry! I'm a 200 hours certified yoga teacher with a passion
            to help students find balance in their practice and their daily
            lives. <br />
            <br />
            <strong>Connect with me @kpalignedyoga</strong>
          </p>
        </div>
        <div className={styles.plantContainer}>
          <Image
            src="/images/plant.png"
            alt="plant picture"
            fill
            className={styles.plant}
          />
        </div>
        <div className={styles.offer}>
          <h2 className={`${styles.heading2} ${cinzel.className}`}>
            What I offer
          </h2>
        </div>
        <div className={styles.accordion__container}>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
    </div>
    
      </div>
    </main>
  );
}
