import React from 'react';
import classNames from 'classnames';

interface FrontendTidbitProps {
  title: string;
  list: string[];
  className?: string;
}

export default function FrontendTidbit({ title, list, className = "" }: FrontendTidbitProps) {
  return (
    <div className={classNames(className, 'frontendtidbit-container bg-dark-400 w-full p-10 text-4xl rounded')}>
      <div>
        <p className='text-light-500 font-bold mb-5 underline'>
          {title}
        </p>
        <div className="flex flex-wrap">
          {list.map((item) => <p className="text-highlight font-bold text-2xl">{item}</p>
          )}
        </div>
      </div>
    </div>
  )
}