'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../(Store)/components/ProductCard'
import { FetchDummyProducts } from '../../reduxSlices/ProductsDummyList'
import { useAppSelector, useAppDispatch } from '../../reduxHooks/hooks'
import Filters from './components/Filters'
import { useRouter, useSearchParams } from 'next/navigation'



const page = () => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const dispatch = useAppDispatch()
    const productList = useAppSelector((state) => state.productList.value);
    const getProductListLoadingStatus = useAppSelector((state) => state.productList.isLoading)

    const fetchedProdList = useAppSelector((state) => state.FilterProduct.fiteredProducts)
    const filterProdData = useAppSelector((state) => state.FilterProduct.data)
    const filterProdLoading = useAppSelector((state) => state.FilterProduct.isLoading)

    const [productsToRender, setproductToRender] = useState(false)



    const filterProductsByCategory = (products: any, category: any) => {
        console.log(products, category)
        let result = products.filter((items: any) => items.category.sub[0] === category)
        return result

    };

    const [filteredProducts, setFilteredProducts] = useState([]); 


    const [navigationShow, setnavigationShow] = useState(false)
    const handlenavigationShow = () => {
        setnavigationShow(!navigationShow)
    }
    const [sortDropdown, setsortDropdown] = useState(false)
    const handlesortDropdown = () => {
        setsortDropdown(!sortDropdown)
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                await dispatch(FetchDummyProducts());

            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();

        // Retrieve the category parameter from the URL
        const categoryParam = searchParams.get('category');

        // Filter products based on the category parameter and update the state
        if (categoryParam && filterProdData) {
            const categories = categoryParam.split(','); // Split the categoryParam into individual categories
            const filteredProducts = fetchedProdList.filter((product: any) =>
                categories.includes(product.category.sub[0])
            );
            setproductToRender(true)
            setFilteredProducts(filteredProducts);

        } else {
            setproductToRender(false)
            // If there's no category parameter or filtered products data is not available, use all products from the fetched list.
            setFilteredProducts(fetchedProdList);


        }

        console.log(filteredProducts)





    }, [filterProdData, fetchedProdList, searchParams, dispatch])








    return (
        <>
            <div className="flex items-baseline justify-around border-b border-gray-200 pb-6 pt-24 mx-auto">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

                <div className="flex items-center">
                    <div className="relative inline-block text-left">
                        <div>
                            <button onClick={handlesortDropdown} type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                Sort
                                <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div className={`${sortDropdown ? "block" : "hidden"} absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}`}>
                            <div className="py-1" role="none">

                                <a href="#" className="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Most Popular</a>
                                <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Best Rating</a>
                                <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Newest</a>
                                <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">Price: Low to High</a>
                                <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-4">Price: High to Low</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row gap-x-4 gap-y-10 min-[1800px]:grid-cols-2">
                <div className="w-full md:w-1/4 ">

                    <div className=" my-2 mx-3 inset-y-0 left-0 flex items-center ">
                        {/* <!-- Mobile menu button--> */}
                        <button onClick={handlenavigationShow} type="button" className=" md:hidden inline-flex bg-slate-800  items-center justify-center rounded-md p-2 text-gray-100 hover:bg-opacity-30 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            Filters
                        </button>
                    </div>

                    <div className={`${navigationShow ? "block" : "hidden"} h-fit  bg-slate-500 bg-opacity-30 p-4  ease-out duration-500 md:block`}>
                        <h2 className="font-bold mb-2">Categories</h2>
                        <ul>
                            <Filters allProd={productList}></Filters>


                        </ul>
                    </div>
                </div>




                <div className="w-full py-20 md:w-3/4my-2 flex flex-wrap gap-x-4 gap-y-10  justify-around md:justify-normal">
                    { }

                    {productsToRender ?
                        filteredProducts.map((product: any, index: number) => (
                            <ProductCard key={index} product={product} />

                        )) :
                        productList.map((product: any, index: number) => (
                            <ProductCard key={index} product={product} />

                        ))
                    }




                </div>
            </div>
        </>
    )
}

export default page