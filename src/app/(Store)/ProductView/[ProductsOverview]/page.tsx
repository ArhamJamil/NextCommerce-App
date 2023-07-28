"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/reduxHooks/hooks';
var jwt = require('jsonwebtoken')
import { addCartItems, getCartItems} from '@/app/reduxSlices/CartSlice';
import { NextResponse } from 'next/server';
import { getCookie } from '@/serverActions/getCookie';
import {getAuthKey} from '@/serverActions/getAuthKey'


interface ProductQuery {
  _id: string | null
  name: string | null
  description: string | null
  price: string | null
  category: string | null
  imageUrl: string | null
}



const page = ({ params }: { params: { ProductsOverview: string } }) => {
  // console.log(params)
  const dispatch = useAppDispatch()
  const SearchParams = useSearchParams();
  const router = useRouter()
  const pathname = usePathname()
  const cartItem = useAppSelector((state) => state.CartItem.cartItems)
  const [toggleSection, settoggleSection] = useState(false)

  // console.log(cartItem)


  const Prods: ProductQuery = {
    _id: SearchParams.get('_id'),
    name: SearchParams.get('name'),
    imageUrl: SearchParams.get('imageUrl'),
    price: SearchParams.get('price'),
    description: SearchParams.get('description'),
    category: SearchParams.get('category')

  }
  const handleAddToCart = async () => {
   
    const token = await getCookie('UserAuth')
   await dispatch(addCartItems({Prods, token}))
  };

  const handleToggleSection = () => {
    settoggleSection(!toggleSection)
  }

 


  return (
    <div className="p-4 ">
      <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <nav className="flex">
              <ol role="list" className="flex items-center">
                <li className="text-left">
                  <div className="-m-1">
                    <Link href='/' className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Home </Link>
                  </div>
                </li>

                <li className="text-left">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <div className="-m-1">
                      <Link href='/categories' className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Products </Link>
                    </div>
                  </div>
                </li>

                <li className="text-left">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <div className="-m-1">
                      <Link href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page"> {Prods.name} </Link>
                    </div>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-3 lg:row-end-1">
                <div className="lg:flex lg:items-start">
                  <div className="lg:order-2 lg:ml-5">
                    <div className="max-w-xl overflow-hidden rounded-lg">
                      <img className="h-auto w-[300px] max-w-full object-cover" src={`${Prods.imageUrl}`} alt="" />
                    </div>
                  </div>

                  <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                    <div className="flex flex-row items-start lg:flex-col">
                      <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                        <img className="h-full w-full object-cover" src="/images/JHxMnVrtPMdcNU1s_7g7f.png" alt="" />
                      </button>
                      <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                        <img className="h-full w-full object-cover" src="/images/JHxMnVrtPMdcNU1s_7g7f.png" alt="" />
                      </button>
                      <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                        <img className="h-full w-full object-cover" src="/images/JHxMnVrtPMdcNU1s_7g7f.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{Prods.name}</h1>

                <div className="mt-5 flex items-center">
                  <div className="flex items-center">
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                  </div>
                  <p className="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
                </div>

                <h2 className="mt-8 text-base text-gray-900">Coffee Type</h2>
                <div className="mt-3 flex select-none flex-wrap items-center gap-1">

                </div>

                <h2 className="mt-8 text-base text-gray-900">Choose subscription</h2>
                <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                  <label className="">
                    <input type="radio" name="subscription" value="4 Months" className="peer sr-only" />
                    <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">4 Months</p>
                    <span className="mt-1 block text-center text-xs">$80/mo</span>
                  </label>
                  <label className="">
                    <input type="radio" name="subscription" value="8 Months" className="peer sr-only" checked />
                    <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">8 Months</p>
                    <span className="mt-1 block text-center text-xs">$60/mo</span>
                  </label>
                  <label className="">
                    <input type="radio" name="subscription" value="12 Months" className="peer sr-only" />
                    <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">12 Months</p>
                    <span className="mt-1 block text-center text-xs">$40/mo</span>
                  </label>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                  <div className="flex items-end">
                    <h1 className="text-3xl font-bold">${Prods.price}</h1>
                    <span className="text-base">/ PKR: {Math.round(parseInt(Prods.price!) * 288)}</span>
                  </div>

                  <button onClick={handleAddToCart} type="button" className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Add to cart
                  </button>
                </div>

                <ul className="mt-8 space-y-2">
                  <li className="flex items-center text-left text-sm font-medium text-gray-600">
                    <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className=""></path>
                    </svg>
                    Free shipping worldwide
                  </li>

                  <li className="flex items-center text-left text-sm font-medium text-gray-600">
                    <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" className=""></path>
                    </svg>
                    Cancel Anytime
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-3">
                <div className="border-b border-gray-300">
                  <nav className="flex gap-4">
                    <button onClick={handleToggleSection} title="" className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </button>

                    <button onClick={handleToggleSection} className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                      Reviews

                    </button>
                  </nav>
                </div>


                <div className={` ${toggleSection ? "hidden" : "block"} mt-8 flow-root sm:mt-12 `}>
                  <h1 className="text-3xl font-bold">Product Description</h1>
                  <p className="mt-4">{Prods.description}</p>
                  <h1 className="mt-8 text-3xl font-bold">Highlights</h1>
                  <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
                  <p className="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
                </div>

                {/* REVIEW SECTION  */}




              </div>
            </div>
            <div className={` ${toggleSection ? "block" : "hidden"}`}>
              <div className={` max-w-full bg-gray-50 `}>

                <div className="my-10 mx-auto max-w-screen-md px-10 py-16">
                  <div className="flex w-full flex-col">
                    <div className="flex flex-col sm:flex-row">
                      <h1 className="max-w-sm text-3xl font-bold text-blue-900">
                        What people think 
                        about {Prods.name}
                      </h1>
                      <div className="my-4 rounded-xl bg-white py-2 px-4 shadow sm:my-0 sm:ml-auto">
                        <div className="flex h-16 items-center text-2xl font-bold text-blue-900">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          4.7
                        </div>
                        <p className="text-sm text-gray-500">Average User Rating</p>
                      </div>
                    </div>
                    <div className="text-gray-700">
                      <p className="font-medium">Reviews</p>
                      <ul className="mb-6 mt-2 space-y-2">
                        <li className="flex items-center text-sm font-medium">
                          <span className="w-3">5</span
                          ><span className="mr-4 text-yellow-400"
                          ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg
                            ></span>
                          <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                            <div className="h-full w-10/12 bg-yellow-400"></div>
                          </div>
                          <span className="w-3">56</span>
                        </li>
                        <li className="flex items-center text-sm font-medium">
                          <span className="w-3">4</span
                          ><span className="mr-4 text-yellow-400"
                          ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg
                            ></span>
                          <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                            <div className="h-full w-8/12 bg-yellow-400"></div>
                          </div>
                          <span className="w-3">12</span>
                        </li>
                        <li className="flex items-center text-sm font-medium">
                          <span className="w-3">3</span
                          ><span className="mr-4 text-yellow-400"
                          ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg
                            ></span>
                          <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                            <div className="h-full w-1/12 bg-yellow-400"></div>
                          </div>
                          <span className="w-3">4</span>
                        </li>
                        <li className="flex items-center text-sm font-medium">
                          <span className="w-3">2</span
                          ><span className="mr-4 text-yellow-400"
                          ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg
                            ></span>
                          <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                            <div className="h-full w-0 bg-yellow-400"></div>
                          </div>
                          <span className="w-3">0</span>
                        </li>
                        <li className="flex items-center text-sm font-medium">
                          <span className="w-3">1</span
                          ><span className="mr-4 text-yellow-400"
                          ><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg
                            ></span>
                          <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
                            <div className="h-full w-1/12 bg-yellow-400"></div>
                          </div>
                          <span className="w-3">5</span>
                        </li>
                      </ul>
                    </div>
                    {/* <button className="w-36 rounded-full bg-blue-900 py-3 text-white font-medium">Write a review</button> */}
                  </div>
                </div>
              </div>

              <ul className="">
              <li className="py-8 text-left border px-4 m-2">
                <div className="flex items-start">
                  {/* <img className="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle" src="/images/Ju6-1negUEjTnBKw_ZP4r.png" alt="" /> */}

                  <div className="ml-6">
                    <div className="flex items-center">
                      <svg className="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                      <svg className="block h-6 w-6 align-middle text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                      </svg>
                    </div>
                    <p className="mt-5 text-base text-gray-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro blanditiis sapiente ab dolores, ad dignissimos perspiciatis.</p>
                    <p className="mt-5 text-sm font-bold text-gray-900">John Lester</p>
                    <p className="mt-1 text-sm text-gray-600">March 01, 2022</p>
                  </div>
                </div>
              </li>
            </ul>


            </div>

           




          </div>
        </section>



      </div>
    </div>
  )
}

export default page