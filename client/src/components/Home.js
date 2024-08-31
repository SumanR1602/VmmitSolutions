import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <div className="flex lg:py-10">
        <div className="flex-1 card p-4 m-6 bg-white border-slate-500">
          <div className="flex flex-col gap-2">
            <Link to="/category/uncategorized/" className='text-blue-700 text-xs font-semibold w-fit'>Uncategorized</Link>
            <Link to="/api/addcomment" className='text-xl font-semibold w-fit'>Hello world!</Link>
            <Link className='text-blue-700 font-semibold text-xs' to='/author/vmmgroupsgmail-com/'>vmmgroups@gmail.com / August 17, 2024</Link>
            <p>Welcome to WordPress. This is your first post.
             Edit or delete it, then start writing!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
