import React from 'react'

const CategoryButton = ( {category, handleChoose} ) => {
  return (
    <button className='w-full text-left px-3 py-1 hover:bg-secondary/50' onClick={(event) => {handleChoose(event)}}>{category}</button>
  )
}

export default CategoryButton