'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
   <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
   <div className="bg-white p-8 rounded shadow-lg">
     <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
     <button
       onClick={() => reset()}
       className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:bg-red-700"
     >
       Try again
     </button>
   </div>
 </div>
  )
}