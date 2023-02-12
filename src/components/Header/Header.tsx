import { useState } from "react"
import { fetchHeader } from "../../utils/strapiAPIs"
import { globalConfig } from "../../utils/globalConfig";
import classNames from "classnames";
import { calcHeight } from "../../utils/helpers";

export default function Header() {
  const title = fetchHeader();
  const { height } = globalConfig.header;
  let headerHeight = calcHeight(height);


  return (
    <div className={classNames(headerHeight, 'p-10 bg-dark-500 w-full')}>
      <h1 className='text-light-500 text-5xl'>{title}</h1>
    </div >
  )
}