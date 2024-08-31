import React from 'react'
import authorIcon from '../images/authoricon.png'
import Home from './Home'

export default function AuthorProfile() {
  return (
    <div className='mt-8'>
      <div className="container bg-white py-8 px-16 mx-6">
        <div className="flex justify-between items-center">
            <p className='font-semibold text-2xl'>Author Name: vmmgroups@gmail.com</p>
            <img src={authorIcon} alt="Author Icon" srcSet="" />
        </div>
      </div>
      <Home/>
    </div>
  )
}
