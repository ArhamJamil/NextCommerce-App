'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { FetchDummyProducts } from '../../reduxSlices/ProductsDummyList'
import { useAppSelector, useAppDispatch } from '../../reduxHooks/hooks'
import { unwrapResult } from '@reduxjs/toolkit'
import { RootState } from '@/app/reduxStore/store'
import { Spinner } from 'flowbite-react';




const ProductListing = () => {


  const dispatch = useAppDispatch()
  const productList = useAppSelector((state: RootState) => state.productList.value);
  const getProductListLoadingStatus = useAppSelector((state: RootState) => state.productList.isLoading)
  const isDataAvailable = useAppSelector((state: RootState) => state.productList.data);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
         await dispatch(FetchDummyProducts());
        // console.log(resultAction)
        // const fetchedProducts = unwrapResult(resultAction);
        // console.log(fetchedProducts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [dispatch])

  if (!isDataAvailable) {
    return (
      <div className="p-4 ">
        <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">

        
            <div className="flex animate-pulse">
              <div className="flex-shrink-0">
                <span className="w-12 h-12 block  rounded-full bg-gray-300"></span>
              </div>

              <div className="ml-4 mt-2 w-full">
                <h3 className="h-4 rounded-md bg-gray-300 " style={{ width: '100%' }} ></h3>

                <ul className="mt-5 space-y-3">
                  <li className="w-full h-4  rounded-md bg-gray-300"></li>
                  <li className="w-full h-4 rounded-md bg-gray-300"></li>
                  <li className="w-full h-4  rounded-md bg-gray-300"></li>
                  <li className="w-full h-4  rounded-md bg-gray-300"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

    );
  }






  return (
    <>
      <div className="p-4 ">
        <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
          <div className="flex flex-wrap justify-around mb-4">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 min-[1800px]:grid-cols-7">
              {productList.map((product: any, index: number) => (
                <ProductCard key = {index}  product={product} />
               
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductListing