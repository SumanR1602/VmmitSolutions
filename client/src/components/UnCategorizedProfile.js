import React from 'react'
import Home from './Home'

export default function AuthorProfile() {
  return (
    <div className='pt-8'>
      <div className="container bg-white py-8 px-16 mx-6">
        <div className="flex justify-between items-center">
            <p className='font-semibold text-2xl'>Uncategorized</p>
        </div>
      </div>
      <Home/>
    </div>
  )
}
