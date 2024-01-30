import { useEffect, useState } from 'react'
import CategoryButton from './CategoryButton';

const Body = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [category, setCategory] = useState('Any')
  const [curCategory, setCurCategory] = useState()
  const [joke, setJoke] = useState()
  const [error, setError] = useState(false)
  const categories = ['Any', 'Programming', 'Misc', 'Dark', 'Pun']

  const handleChoose = (e) => {
    setCategory(e.target.innerText)
    setIsOpen((prev) => !prev)
  }

  const callToApi = async () => {
    const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?type=single`)
    const json = await response.json()

    if(json.error){
      setJoke('Naubusan ng joke si Idol!')
      setCurCategory('Error')
      setError(true)
      return
    }
    setJoke(json.joke)
    setCurCategory(json.category)
    setError(false)
  }

  useEffect(() => {
    callToApi()
  }, [])

  return (
    <div className='px-5 mt-14 flex flex-col'>

      {/* MAIN-CONTENT */}
      <div className='bg-secondary rounded-xl min-h-[320px] max-h-fit px-9 py-9 mb-5 flex flex-col items-center justify-center gap-12'>
        <h1 className='heading-1 text-center'>{joke}</h1>
        <p className={`category ${error ? 'bg-red-400' : 'bg-accDark'} px-2 py-1 rounded `}>{curCategory}</p>
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
          {isOpen && 
            <div className='bg-primary w-full absolute mt-1 flex flex-col items-start'>
              {categories.map((category) => {
                return (
                  <CategoryButton category={category} handleChoose={handleChoose}/>
                )
              })}
            </div>
          }
          <div className='flex justify-center mt-12'>
            <button className='btn bg-accDark hover:bg-accLight px-5 py-2 rounded-md' onClick={callToApi}>Generate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body