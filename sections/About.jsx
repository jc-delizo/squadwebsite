'use client';

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from '../styles';
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Squad" textStyles="text-center text-black" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-black"
      >
        We are a BPO company that offers a wide range of services to help businesses achieve their goals. Our content moderation team ensures that your online platforms are free from any unwanted content, maintaining a safe and secure environment for your users. We offer real estate solutions that cover everything from property management to leasing and sales, making the entire process hassle-free for you. Our tech support team provides efficient solutions for all your IT-related issues, ensuring that your operations run smoothly.
      </motion.p>
      {/* <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      /> */}
    </motion.div>
  </section>
);

export default About;
