import React from 'react'
import DashboardSideBar from '../components/DashboardSideBar'
import ProductDetails from '../components/ProductDetails'


const Page = () => {
    return (
        <>
            {/* <!-- Sidebar --> */}
            <div className="flex h-screen bg-gray-100">
            <div className="absolute left-0 flex h-screen w-72 flex-col overflow-hidden rounded-r-2xl bg-gray-700 text-white">
    <h1 className="mt-10 ml-10 text-3xl font-bold">Urbane</h1>
    <ul className="mt-20 space-y-3">
      <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
        <span
          ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg></span
        ><span className="">Overview</span>
      </li>
      <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 font-semibold hover:bg-slate-600">
        <span
          ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg></span
        ><span className="">Transaction</span>
        <svg className="absolute -top-1/2 -right-1 h-32 w-8 text-gray-50" xmlns="http://www.w3.org/2000/svg" viewBox="399.349 57.696 100.163 402.081" width="1em" height="4em">
          <path fill="currentColor" d="M 499.289 57.696 C 499.289 171.989 399.349 196.304 399.349 257.333 C 399.349 322.485 499.512 354.485 499.512 458.767 C 499.512 483.155 499.289 57.696 499.289 57.696 Z" />
        </svg>
      </li>
      <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
        <span
          ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></span
        ><span className="">Send Money</span>
      </li>
      <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
        <span className="text-2xl"
          ><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36">
            <path fill="currentColor" d="M32 15h-1V9a1 1 0 0 0-1-1H6a1 1 0 0 1-1-.82v-.36A1 1 0 0 1 6 6h23.58a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3a3.08 3.08 0 0 0 0 .36v20.57A4.1 4.1 0 0 0 7.13 32H30a1 1 0 0 0 1-1v-6h1a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Zm-3 15H7.13A2.11 2.11 0 0 1 5 27.93V9.88A3.11 3.11 0 0 0 6 10h23v5h-7a5 5 0 0 0 0 10h7Zm2-7h-9a3 3 0 0 1 0-6h9Z" className="clr-i-outline clr-i-outline-path-1" />
            <circle cx="23.01" cy="20" r="1.5" fill="currentColor" className="clr-i-outline clr-i-outline-path-2" />
            <path fill="none" d="M0 0h36v36H0z" /></svg></span
        ><span className="">Payments</span>
      </li>
      <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
        <span
          ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg></span
        ><span className="">Cards</span>
      </li>
      <li className="relative flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
        <span
          ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></span
        ><span className="">Settings</span>
      </li>
    </ul>

    <div className="my-6 mt-auto ml-10 flex cursor-pointer">
      <div>
        <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      </div>
      <div className="ml-3">
        <p className="font-medium">Palmer</p>
        <p className="text-sm text-gray-300">Kiev, Ukraine</p>
      </div>
    </div>
  </div>
                {/* <!-- Main content --> */}
                <div className="flex flex-col flex-grow p-4">
                    {/* <!-- Content goes here --> */}
                    <h2 className="text-xl font-semibold mb-4">Order Management</h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Order ID</th>
                                    <th className="px-4 py-2">Customer Name</th>
                                    <th className="px-4 py-2">Status</th>
                                    <th className="px-4 py-2">Total Amount</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- Sample data rows (replace with dynamic data from backend) --> */}
                                <tr>
                                    <td className="border px-4 py-2">12345</td>
                                    <td className="border px-4 py-2">John Doe</td>
                                    <td className="border px-4 py-2">Processing</td>
                                    <td className="border px-4 py-2">$100.00</td>
                                    <td className="border px-4 py-2">
                                        <button className="text-blue-500 hover:underline">View</button>
                                        <button className="text-red-500 hover:underline">Delete</button>
                                    </td>
                                </tr>
                                {/* <!-- Add more data rows here --> */}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-center mt-4">
                        <nav aria-label="Page Navigation" className="mx-auto my-10 flex max-w-xs justify-between space-x-2 rounded-md bg-white py-2">
                            <a href="#" className="flex items-center space-x-1 font-medium hover:text-blue-600" aria-label="First Page">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                    <path fill-rule="evenodd" d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="flex items-center space-x-1 font-medium hover:text-blue-600" aria-label="Previous Page">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                    <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            <ul className="flex items-center">
                                <li><a href="#" className="px-2 text-lg font-medium text-gray-400 sm:px-3 hover:text-blue-600" aria-label="Page 8">8</a></li>
                                <li><a href="#" className="rounded-md px-2 text-2xl font-medium text-blue-600 sm:px-3" aria-label="Current Page">9</a></li>
                                <li><a href="#" className="px-2 text-lg font-medium text-gray-400 sm:px-3 hover:text-blue-600" aria-label="Page 10">10</a></li>
                            </ul>
                            <a href="#" className="flex items-center space-x-1 font-medium hover:text-blue-600" aria-label="Next Page">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="flex items-center space-x-1 font-medium hover:text-blue-600" aria-label="Last Page">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                    <path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </nav>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Page