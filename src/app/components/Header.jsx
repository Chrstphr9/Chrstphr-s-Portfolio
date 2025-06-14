import React from "react";
import Image from "next/image";
import { assets } from "../../../assets/assets";
import * as motion from "motion/react-client"

const Header = () => {
  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto pt-32 pb-20 flex flex-col
items-center justify-center gap-4"
    >
      {/* <div>
        <Image src={assets.profileImg} alt="profile" className="rounded-full w-32" />
      </div> */}

      <motion.h3 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex items-end gap-2 text-xl md:text-2xl mb-3">
        Hi! I am Anigbo Christopher
        <Image src={assets.hand_icon} alt="hand" className="w-6" />{" "}
      </motion.h3>

      <motion.h1 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-3xl sm:text-6xl lg:text-[66px]">
        Front-End Engineer Based in Abuja.
      </motion.h1>

      <motion.p 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="max-w-2xl mx-auto"></motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a  
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black
                    text-white flex items-center gap-2"
        >
          Contact Me{" "}
          <Image src={assets.right_arrow_white} alt="arrow" className="rounded-full w-4" />
        </motion.a>

        <motion.a
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex
                    items-center gap-2"
        >
          My Resume{" "}
          <Image src={assets.download_icon} alt="download" className="rounded-full w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
