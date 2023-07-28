'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
const images = [
  "/banner1.jpg",
  "/banner2.jpg",
  "/banner3.jpg",
  
  
  
  // Add more image URLs here
];
export default function HeaderSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <motion.section
        className="text-gray-600 body-font duration-300 bg-gray-700 bg-blend-multiply items-center  "
        style={{
          background: `url('${images[currentImage]}') center / cover no-repeat`,
          minHeight: '60vh'


        }}
        animate={{ y: [0, -100, 0] }}
        transition={{ ease: "circInOut", duration: 1 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        {/* <div className="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <motion.h1
            animate={{ y: [0, 100, 0] }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#d2691e] md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</motion.h1>
          <motion.p
            animate={{ y: [0, 100, 0] }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</motion.p>




        </div> */}
      </motion.section>

    </>
  )
}
