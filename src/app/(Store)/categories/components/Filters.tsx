'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { FetchDummyProducts } from '../../../reduxSlices/ProductsDummyList'
import { useAppSelector, useAppDispatch } from '../../../reduxHooks/hooks'
import Link from 'next/link';
import { FetchFilterProducts } from '@/app/reduxSlices/FilteredProducts'
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation'
const Filters = ({ allProd }: any) => {

  const dispatch = useAppDispatch()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const productList = useAppSelector((state) => state.productList.value);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);


  const [mainCategoryToggle, setMainCategoryToggle] = useState<string | null>(null);

  const handleMainCategoryToggle = (mainCategory: string) => {
    setMainCategoryToggle((prev) => (prev === mainCategory ? null : mainCategory));
  };
  const handleSubCategoryToggle = (subCategory: string) => {
    setSelectedSubCategories((prev) =>
      prev.includes(subCategory) ? prev.filter((category) => category !== subCategory) : [...prev, subCategory]
    );
  };

  useEffect(() => {
    // Fetch products only when the selected subcategories change
    if (selectedSubCategories.length > 0) {
      const selectedCategoriesQueryString = selectedSubCategories.join(',');
      dispatch(FetchFilterProducts(selectedCategoriesQueryString));
      const queryString = createQueryString('category', selectedCategoriesQueryString);
      router.push(pathname + '?' + queryString)
    } else {
      // If no subcategories are selected, clear the query parameter and fetch all products
      dispatch(FetchDummyProducts());
      router.push(pathname)
    }
  }, [selectedSubCategories]);

  const mainCategories = productList.map((item: any) => item.category.main);
  const uniqueMainCategories = Array.from(new Set(mainCategories));

  const getSubCategories = (mainCategory: string) => {
    const subCategories = productList
      .filter((item: any) => item.category.main === mainCategory)
      .flatMap((item: any) => item.category.sub);

    // Return unique sub-categories for the main category
    return Array.from(new Set(subCategories));
  };



  const createQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams()
    params.set(name, value)
    console.log(pathname, params)

    return params.toString()
  },
    [searchParams]
  )




  return (
    <div className='flex flex-col'>
      {/* Render buttons for unique main categories */}
      {uniqueMainCategories.map((mainCategory: any) => (
        <div key={mainCategory}>
          <button
            onClick={() => handleMainCategoryToggle(mainCategory)}
            type='button'
            className='flex w-full items-center justify-between px-2 py-3 text-gray-400 hover:text-gray-500'
            aria-controls='filter-section-mobile-0'
            aria-expanded='false'
          >
            <span className='font-medium text-gray-900'>{mainCategory}</span>
            <span className='ml-6 flex items-center'>
              <svg
                className={`h-5 w-5 ${mainCategoryToggle === mainCategory ? 'hidden' : 'block'}`}
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z' />
              </svg>
              <svg
                className={`h-5 w-5 ${mainCategoryToggle === mainCategory ? 'block' : 'hidden'}`}
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
          </button>

          {/* Render sub-categories for the selected main category */}
          {mainCategoryToggle === mainCategory && (
            <div className='pt-4' id='filter-section'>
              <div className='space-y-6'>
                {getSubCategories(mainCategory).map((subCategory: any) => (
                  <div className='flex items-center' key={subCategory}>

                    <input
                      id={`filter-${subCategory}`}
                      name="color"
                      value={subCategory}
                      type='checkbox'

                      checked={selectedSubCategories.includes(subCategory)}
                      onChange={() => handleSubCategoryToggle(subCategory)}

                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                    <label
                      htmlFor={`filter-${subCategory}`}
                      className='ml-3 min-w-0 flex-1 text-gray-500'
                    >
                      {subCategory}
                    </label>
                  </div>
                ))}
              </div>
              <hr className='w-full mt-4' />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;