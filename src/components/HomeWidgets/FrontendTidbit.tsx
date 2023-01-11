import React from 'react'

export default function FrontendTidbit({title, list}: {title: string, list: string[]}) {
  return (
    <div className='frontendtidbit-container bg-dark-500 w-full h-60 p-10 text-4xl'>
      <p className='text-light-500 font-bold mb-5 underline'>
        {title}
      </p>
      <>
        {list.map((item) => <p className="text-highlight font-bold text-2xl">{item}</p>
          )}
      </>
    </div>
  )
}