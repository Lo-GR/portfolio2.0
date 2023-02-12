import { useState } from "react"
import { fetchHeader } from "../../utils/strapiAPIs"

export default function Header() {
  const title = fetchHeader();

  return (
    <div className='p-10 bd-dark-500 w-full'>
      <h1 className='text-light-500'>{title}</h1>
    </div>
  )
}