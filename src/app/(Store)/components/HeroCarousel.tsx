'use client'
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const images = [
    "/norevision.jpg",
    "/bogdan.jpg",
    "/brooke.jpg",
    "/simon.jpg",
    // Add more image URLs here
];

const HeroCarousel = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.section
            className="text-gray-600 body-font duration-300"
            style={{
                background: `url('${images[currentImage]}') center / cover no-repeat`,
                minHeight: "100vh",

            }}
            animate={{ y: [0, -100, 0] }}
            transition={{ ease: "circInOut", duration: 1 }}
            whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
            }}
        >   
            <div className="container mx-auto flex px-5 ">
                <div className="mx-auto items-center my-32">
                    <motion.h1
                        animate={{ y: [0, 100, 0] }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        className="title-font font-bold sm:text-4xl text-3xl mb-4  text-amber-200 text-center"
                    >
                        Knausgaard typewriter readymade marfa
                    </motion.h1>
                    <motion.p
                        animate={{ y: [0, 100, 0] }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        className="mb-8 leading-relaxed"
                    >
                        Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
                        swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
                    </motion.p>
                    <div className="flex flex-row flex-shrink mx-auto">
                        <motion.input
                            animate={{ y: [0, 100, 0] }}
                            transition={{ ease: "easeOut", duration: 2 }}
                            type="search"
                            name=""
                            id=""
                            className="w-[80%] bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out mx-1"
                        />
                        <motion.button
                            animate={{ y: [0, 100, 0] }}
                            transition={{ ease: "easeOut", duration: 2 }}
                            className="bg-slate-800 inline-flex py-3 px-5 rounded-lg items-center text-white hover:text-green-900 hover:bg-gray-200 focus:outline-none mx-1"
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.5 },
                            }}
                        >
                            Search
                        </motion.button>
                    </div>
                </div>
            </div>


        </motion.section>
    );
};

export default HeroCarousel;