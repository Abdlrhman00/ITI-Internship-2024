import React from "react";
import styles from "./Dreams.module.css"; // Import the CSS module

const Dreams = () => {
  return (
    <section id="dreams" className={`${styles.container} mt-5`}>
      <h2 className={styles.heading}>My Dreams</h2>
      <p className={styles.text}>
        As I pursue my professional and personal growth, I hold dear a vision that extends beyond technology. I aspire to deepen my faith and strengthen my connection with God, following the noble actions and teachings of Prophet Muhammad (peace be upon him). A significant part of
        my dreams involves contributing to the liberation of Palestine and supporting the rightful sovereignty of its people. 
        I yearn to see Al-Quds (Jerusalem) freed from occupation and to be able to pray in its sacred Masjid. 
        These aspirations guide me, inspiring me to make a meaningful impact both spiritually and socially.
      </p>
    </section>
  );
};

export default Dreams;
