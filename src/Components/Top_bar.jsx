import React from 'react';
import {Link} from 'react-router-dom'
// import {User} from '../Pages/Home'

const TopBar =()=>{
    return(
         <>  
            <header className="text-gray-600 body-font bg-slate-300">
  <div className="mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    {/* <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a> */}
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/contact" className="mr-5 hover:text-gray-900">contact</Link>
      <Link to="/register" className="mr-5 hover:text-gray-900">Sign Up</Link>
      {/* <Link to="/" className="mr-5 hover:text-gray-900">Third Link</a>
      <Link to="/" className="mr-5 hover:text-gray-900">Fourth Link</a> */}
    </nav>
    <Link to="/dashboard" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Dashboard
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
</header>   
          
        </>
       
    )
}

export default TopBar