import React from 'react'

const Body = () => {
  return (
    <div className='px-5 mt-14 flex flex-col'>
      {/* MAIN-CONTENT */}
      <div className='bg-secondary rounded-xl h-[320px] px-9 mb-5 flex flex-col items-center justify-center gap-12'>
        <h1 className='heading-1 text-center'>"Two SQL tables sit at the bar. A query approaches and asks "Can I join you?"”</h1>
        <p className='category bg-accDark px-2 py-1 rounded'>Programming</p>

      </div>
      {/* SETTINGS */}
      <div className='bg-secondary rounded-xl p-9'>
        <h2 className='heading-2'>Categories:</h2>
        <select 
          name="category" 
          id="category" 
          className='bg-primary w-full p-1'
        >
          <option value="Any">Any</option>
          <option value="Programming">Programming</option>
          <option value="Misc">Misc</option>
          <option value="Dark">Dark</option>
          <option value="Pun">Pun</option>
          <option value="Spooky">Spooky</option>
          <option value="Christmas">Christmas</option>
        </select>

      </div>
    </div>
  )
}

export default Body