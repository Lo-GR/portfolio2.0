import React from 'react'

interface SkillPillProps {
  skill: string
}
export default function SkillPill({ skill }: SkillPillProps) {
  return (
    <div className='p-2 rounded-md bg-highlight flex'>{skill}</div>
  )
}
