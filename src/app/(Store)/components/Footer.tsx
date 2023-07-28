'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from 'next/link';

const Footer = () => {
    return (
        <>


            <footer className="text-gray-600 body-font bg-[#111827] ">

               



                <div className=" p-6 md:p-10 bg-[#111827]">
                    <div className="mx-auto max-w-screen-xl">
                        <div className="md:flex md:justify-between">

                            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Company</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="#" className=" hover:underline">About</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Careers</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Brand Center</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Blog</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Help center</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Discord Server</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Twitter</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Facebook</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Privacy Policy</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Licensing</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                            <div className='md:px-4'>
                                <h2 className="mb-6  font-bold text-2xl text-white uppercase dark:text-white">Subscribe to our newsletter</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        The latest news, articles, and resources, sent to your inbox weekly.
                                    </li>
                                    <li className="mb-4">
                                        <div className="flex flex-row flex-shrink ">

                                            <input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@NextComerce.com" />
                                            <motion.button

                                                className="bg-slate-800 inline-flex py-3 px-5 rounded-lg items-center text-white hover:text-green-900 hover:bg-gray-200 focus:outline-none mx-1"
                                                whileHover={{
                                                    scale: 1.05,
                                                    transition: { duration: 0.5 },
                                                }}
                                            >
                                                Submit
                                            </motion.button>
                                        </div>

                                        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <Link href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</Link>.</p>

                                    </li>
                                </ul>
                            </div>


                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                    </div>
                </div>
                <div className="bg-[#131a22]">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">


                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />

                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NextCommerce</span>

                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 NextCommerce —
                            <Link href="https://linkedin.com/in/arhamjamil-27-codewitharham/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Muhammad Arham Jamil</Link>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a className="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer