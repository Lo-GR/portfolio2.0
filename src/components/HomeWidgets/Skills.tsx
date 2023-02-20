import React from 'react'
import classNames from 'classnames';

interface SkillsProps {
  topText: string;
  skills: string[];
  className?: string;
}

export default function Skills({ topText, skills, className = "" }: SkillsProps) {
  return (
    <div className={classNames(className, 'bg-dark-400 w-full p-10 text-4xl rounded')}>
      <div>
        <p className=' text-highlight font-bold mb-8'>
          {topText}
        </p>
        <p className='text-light-500 leading-relaxed font-mono'>
          {skills.map(skill => `${skill} `)}
        </p>
      </div>
    </div>
  )
}
