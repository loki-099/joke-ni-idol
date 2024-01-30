import React from 'react'

const Header = () => {
  return (
    <div className='w-full bg-secondary'>
      <div className='px-5 py-4 max-w-[1240px] mx-auto flex'>
        <a href="/" className='inline'><img src="/assets/logo-mobile.svg" alt="logo" /></a>
      </div>
    </div>
  )
}

export default Header