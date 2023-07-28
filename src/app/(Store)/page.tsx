'use client'
import HeaderSection from '@/app/(Store)/components/HeaderSection'
import ProductListing from '@/app/(Store)/components/ProductListing'
import { Suspense } from 'react'
import {useEffect} from 'react'
import { getCookie } from '@/serverActions/getCookie'
import { useAppDispatch } from '../reduxHooks/hooks'
import { getCartItems } from '../reduxSlices/CartSlice'

export default function Home() {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    const cartItemsGetter = async () => {
      const token = await getCookie('UserAuth')
      await dispatch(getCartItems({token}))
    }
    cartItemsGetter()
  },[])

  return (
    <>


      <HeaderSection></HeaderSection>

      <ProductListing></ProductListing>


    </>

  )
}
