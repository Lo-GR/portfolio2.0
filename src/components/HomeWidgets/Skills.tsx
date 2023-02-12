import React from 'react'

export default function Skills({ topText, skills }: { topText: string, skills: string[] }) {
  return (
    <div className='bg-dark-500 w-full h-60 p-10 text-4xl rounded'>
      <p className='text-light-500 font-bold mb-8'>
        {topText}
      </p>
      <p className='text-highlight'>
        {skills.map(skill => `${skill} `)}
      </p>
    </div>
  )
}
