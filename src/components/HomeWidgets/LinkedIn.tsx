import React from 'react'

export default function LinkedIn({ linkedinText, linkedinProfilePic, linkedinURL}: {linkedinText: string, linkedinProfilePic: string, linkedinURL: string}) {
  return (
    <div className='linkedin-container bg-dark-500 w-full h-60 p-8 text-4xl rounded'>
      <a href={linkedinURL} target="_blank" className="w-full flex justify-content items-center flex-col">
        <img src={linkedinProfilePic} alt="profile pic" className="w-28 h-28 rounded-full"/>
        <p className='text-light-500 font-bold mb-8'>
          {linkedinText}
        </p>
      </a>
    </div>
  )
}
