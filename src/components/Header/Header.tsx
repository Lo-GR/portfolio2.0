import { useState } from "react"
import { fetchHeader } from "../../utils/strapiAPIs"
import { globalConfig } from "../../utils/globalConfig";

export default function Header() {
  const title = fetchHeader();
  const { height } = globalConfig.header;

  return (
    <div className='p-10 bg-dark-500 w-full'>
      <h1 className='text-light-500 text-5xl'>{title}</h1>
    </div>
  )
}