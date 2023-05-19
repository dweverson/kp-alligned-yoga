"use client";
import { useState } from "react";
import styles from "./accordion.module.css";
import { cinzel, openSans } from "@/app/page";
import { NextPage } from "next";

interface Props {
    title: string,
    content: string, 
}

const Accordion: NextPage<Props> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordion}>
      <div
        className={styles.accordion__title}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={cinzel.className}>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className={`${styles.accordion__content} ${openSans.className}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
