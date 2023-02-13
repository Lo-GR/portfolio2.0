import React from 'react'
import classNames from 'classnames';

interface LinkedInProps {
  linkedinText: string;
  linkedinProfilePic: string;
  linkedinURL: string;
  className?: string;
}
export default function LinkedIn({ linkedinText, linkedinProfilePic, linkedinURL, className = "" }: LinkedInProps) {
  return (
    <div className={classNames(className, 'linkedin-container bg-dark-400 w-full p-8 text-4xl rounded')}>
      <div>
        <a href={linkedinURL} target="_blank" className="w-full flex justify-content items-center flex-col">
          <img src={linkedinProfilePic} alt="profile pic" className="w-28 h-28 rounded-full" />
          <p className='text-light-500 font-bold mb-8'>
            {linkedinText}
          </p>
        </a>
      </div>
    </div>
  )
}
