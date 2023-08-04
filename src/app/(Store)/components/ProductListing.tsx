'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { FetchDummyProducts } from '../../reduxSlices/ProductsDummyList';
import { useAppSelector, useAppDispatch } from '../../reduxHooks/hooks';
import { unwrapResult } from '@reduxjs/toolkit';
import { RootState } from '@/app/reduxStore/store';
import { Spinner } from 'flowbite-react';

const ProductListing = () => {
  const dispatch = useAppDispatch();
  const productList = useAppSelector((state: RootState) => state.productList.value);
  const getProductListLoadingStatus = useAppSelector((state: RootState) => state.productList.isLoading);
  const isDataAvailable = useAppSelector((state: RootState) => state.productList.data);

  // Add a state variable to track the loading status
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await dispatch(FetchDummyProducts());
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false); // Set loading to false once the data is fetched (whether successful or not)
      }
    };
    fetchProducts();
  }, [dispatch]);

  if (isLoading) {
    // Show the loading spinner while the data is being fetched
    return (
      <div className="p-4">
        <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
        <div className="max-w-lg w-full mx-auto p-4">
        <div className="animate-pulse bg-gray-300 rounded-lg overflow-hidden shadow-md">
          {/* Placeholder thumbnail */}
          <div className="h-48 bg-gray-400 w-full"></div>
          <div className="p-4">
            {/* Placeholder title */}
            <div className="h-4 bg-gray-400 w-2/3 mb-2"></div>
            {/* Placeholder description */}
            <div className="h-3 bg-gray-400 w-1/2"></div>
          </div>
        </div>
      </div>
        </div>
      </div>
    );
  }

  if (!isDataAvailable) {
    // Show a message or handle the case when data is not available
    return (
      <div className="p-4">
        <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-10 min-[1800px]:grid-cols-2">
            <div className="w-full py-20 md:w-3/4my-2 flex flex-wrap gap-x-4 gap-y-10  justify-around md:justify-normal"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="p-4">
        <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
          <div className="flex flex-wrap justify-around mb-4">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 min-[1800px]:grid-cols-7">
              {productList.map((product: any, index: number) => (
                
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListing;
