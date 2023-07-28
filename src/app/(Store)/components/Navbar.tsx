'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { getCookie } from "../../../serverActions/getCookie";
import { deleteCookie } from '../../../serverActions/deleteCookie'
var jwt = require('jsonwebtoken')

const Navbar = () => {
    const router = useRouter()
    const [profileShow, setprofileShow] = useState(false)
    const [isLogin, setisLogin] = useState(false)
    const handleProfileDropDown = () => {
        setprofileShow(!profileShow)
    }

    const [MenuShow, setMenuShow] = useState(false)
    const handleMenuDropDown = () => {
        setMenuShow(!MenuShow)
    }

    const handleLogout = async () => {
        try {
            const token = await deleteCookie('UserAuth');
            if (token) {

                setisLogin(false)
                setMenuShow(false);

                router.replace('/');


            }

        } catch (error) {

        }
    }

    useEffect(() => {
        async function tokensetter() {
            try {
                const token = await getCookie('UserAuth');

                if (token) {
                    // console.log(token.name)
                    if (token.name !== '') {
                        setisLogin(true);
                    } else {
                        setisLogin(false);
                    }
                } else {
                    setisLogin(false);
                }
                // console.log('isLogin:', isLogin);
            } catch (error) {
                console.error("Error while checking user authentication:", error);
                setisLogin(false);

            }
        }
        tokensetter();



    }, [handleLogout,])

    useEffect(() => {
        // When isLogin changes to false, hide the mobile menu
        if (!isLogin) {
            setprofileShow(false);
        }
    }, [isLogin]);





    return (
        <>

            <nav className="bg-[#131a22] top-0 z-50 sticky w-full block">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

                    <div className='py-4 mx-4'>
                        <label htmlFor="hs-trailing-button-add-on-with-icon-and-button" className="sr-only">Search Product</label>
                        <div className="relative flex rounded-md shadow-sm">
                            <input type="text" id="hs-trailing-button-add-on-with-icon-and-button" name="hs-trailing-button-add-on-with-icon-and-button" className="py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
                            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                                <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                            <button type="button" className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm">Search</button>
                        </div>
                    </div>


                    <div className="relative flex h-16 items-center justify-around">

                        <div className=" inset-y-0 left-0 flex items-center sm:hidden ">
                            {/* <!-- Mobile menu button--> */}
                            <button onClick={handleMenuDropDown} type="button" className=" inline-flex  items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>


                        <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
                            <Link href={'/'}>
                                <div className="flex flex-shrink-0 items-center ">
                                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                                    <div className='text-white pl-2 font-bold'>NextCommerce</div>
                                </div>
                            </Link>

                            <div className="hidden sm:ml-6 sm:block">


                                <div className="flex space-x-4">

                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <Link href="/categories" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Shop</Link>
                                    {/*<a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <Link href={'/cart'}>
                                <button type="button" className="rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">Viewcart</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" className='h-5 w-6 ' viewBox="0 0 576 512" fill='white'><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                                </button>
                            </Link>
                            {/* <!-- Profile dropdown --> */}
                            <div className="relative ml-3">
                                {isLogin ? (<div>
                                    <button onClick={handleProfileDropDown} type="button" className={`flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true"`}>
                                        <span className="sr-only">Open user menu</span>
                                        <Link href='#'><img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /></Link>
                                    </button>
                                </div>) : (
                                    < div > <Link href={'/login'}><button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Login
                                        </span>
                                    </button></Link>
                                    </div>)}




                                <div className={` ${profileShow ? "block" : "hidden"} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}`}>

                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
                                    <Link rel='preload' href={'/'} onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className={`sm:hidden ${MenuShow ? "block" : "hidden"}`} id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">

                        <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                    </div>
                </div>

            </nav >



        </>
    )

}

export default Navbar