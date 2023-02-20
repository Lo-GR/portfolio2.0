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
        <div className="flex flex-wrap flex-col h-full">
          {list.map((item, index) => <p key={item} className={`text-highlight font-bold text-4xl font-mono ${index < list.length - 1 ? "mb-10" : ""}`}>{item}</p>
          )}
        </div>
      </div>
    </div>
  )
}