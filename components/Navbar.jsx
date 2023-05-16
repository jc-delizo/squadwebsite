'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative cursor-pointer`}
  >
    <div className="absolute w-[50%] inset-0" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/scssfavicon.svg"
        alt="logo"
        className="h-[50px] object-contain"
      />
      <div className="flex">
        <h2 className="font-normal px-3 text-[20px] leading-[30px] text-black">
          Explore
        </h2>
        <h2 className="font-normal px-3 text-[20px] leading-[30px] text-black">
          Contact
        </h2>
      </div>
      {/* <img
        src="/menu.svg"
        alt="menu"
        className="w=[24px] h-[24px] object-contain"
      /> */}
    </div>
  </motion.nav>
);

export default Navbar;
