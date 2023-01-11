import { useState } from "react"
import { fetchHeader } from "../../utils/strapiAPIs"

export default function Header() {
  const title = fetchHeader();

  return (
    <div className='header-container p-5 bg-dark-500 w-full'>
      <h1 className='text-light-500 opacity-50 text-5xl lg:text-8xl'>{title}</h1>
    </div>
  )
}