import { useState } from 'react'

const Body = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [category, setCategory] = useState('Any')

  const handleChoose = (e) => {
    setCategory(e.target.innerText)
    setIsOpen((prev) => !prev)
  }

  return (
    <div className='px-5 mt-14 flex flex-col'>
      {/* MAIN-CONTENT */}
      <div className='bg-secondary rounded-xl h-[320px] px-9 mb-5 flex flex-col items-center justify-center gap-12'>
        <h1 className='heading-1 text-center'>"Two SQL tables sit at the bar. A query approaches and asks "Can I join you?"”</h1>
        <p className='category bg-accDark px-2 py-1 rounded'>Programming</p>

      </div>
      {/* SETTINGS */}
      <div className='bg-secondary rounded-xl p-9'>
        <h2 className='heading-2 mb-1'>Categories:</h2>
        <div className='relative'>
          <button
            className='bg-primary w-full flex items-center justify-between px-3 py-2'
            onClick={() => {setIsOpen((prev) => !prev)}}
          >
            <p>{category}</p>
            <span>{isOpen ? <img src="/assets/arrow-up.svg" alt="" /> : <img src="/assets/arrow-down.svg" alt="" />}</span>
          </button>
          {isOpen &&           <div className='bg-primary w-full absolute mt-1 flex flex-col items-start'>
            <button className='w-full text-left px-3 py-1 hover:bg-secondary/50' onClick={(event) => {handleChoose(event)}}>Any</button>
            <button className='w-full text-left px-3 py-1 hover:bg-secondary/50' onClick={(event) => {handleChoose(event)}}>Programming</button>
            <button className='w-full text-left px-3 py-1 hover:bg-secondary/50' onClick={(event) => {handleChoose(event)}}>Misc</button>
            <button className='w-full text-left px-3 py-1 hover:bg-secondary/50' onClick={(event) => {handleChoose(event)}}>Dark</button>
            <button className='w-full text-left px-3 py-1 hover:bg-secondary/50' onClick={(event) => {handleChoose(event)}}>Pun</button>
            <button className='w-full text-left px-3 py-1 hover:bg-secondary/50' onClick={(event) => {handleChoose(event)}}>Spooky</button>
            <button className='w-full text-left px-3 py-1 hover:bg-secondary/50' onClick={(event) => {handleChoose(event)}}>Christmas</button>
          </div>}
          <div className='flex justify-center mt-12'>
            <button className='btn bg-accDark hover:bg-accLight px-5 py-2 rounded-md'>Generate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body