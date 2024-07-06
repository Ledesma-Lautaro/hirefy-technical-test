import * as React from 'react';


const Header = () => {
  return (
    <header className='bg-gradient-to-r from-blue-100 from-0% via-blue-300 via-42% to-blue-700 to-79% sticky top-0 z-10'>
      <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>
        <h1 className='w-full h-full p-4 font-bold text-3xl'>
          Release Notes
        </h1>
      </div>
    </header>
  )
}

export default Header