import React from 'react'
import Header from '../components/Header';
import Body from '../components/Body';

const Home = () => {
  return (
    <div className='min-h-[130vh] max-h-fit pb-12 text-white'>
      <Header/>
      <Body/>
    </div>
  )
}

export default Home