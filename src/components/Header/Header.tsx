import { useState } from "react"
import { fetchHeader } from "../../utils/strapiAPIs"

export default function Header() {
  const [title, setTitle] = useState<string>(fetchHeader())

  return (
    <div className='header-container p-5 bg-darkPrimary lg:w-full'>
      <h1 className='text-textPrimary opacity-50 lg:text-8xl'>{title}</h1>
    </div>
  )
}