import React from 'react'

export default function Greeting({hello, name, subtext}: {hello: string, name: string, subtext: string}) {
  return (
    <div className='greeting-container bg-dark-500 w-full h-60 p-10 text-4xl'>
      <p className='text-light-500 font-bold mb-8'>
        {hello} <span className='text-highlight'>{name}</span>
      </p>
      <p className='text-light-500'>
        {subtext}
      </p>
    </div>
  )
}
