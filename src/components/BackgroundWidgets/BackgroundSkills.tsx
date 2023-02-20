import classNames from 'classnames';
import SkillPill from './SkillPill';

interface BackgroundSkillsProps {
  skills: {
    frontend: string[];
    backend: string[];
    cloudOps: string[];
  }
  className?: string;
}

export default function BackgroundSkills({ skills, className }: BackgroundSkillsProps) {
  return (
    <div className={classNames(className, 'bg-dark-400 w-full flex flex-col p-10 rounded')}>
      <h2 className='text-light-500 font-bold mb-5 underline text-3xl'>Frontend</h2>
      <div className="flex flex-wrap text-light-500 gap-2 mb-3">
        {skills.frontend.map(skill => <SkillPill key={skill} skill={skill} />)}
      </div>
      <h2 className='text-light-500 font-bold mb-5 underline text-3xl '>Backend</h2>
      <div className="flex flex-wrap text-light-500 gap-2 mb-3">
        {skills.backend.map(skill => <SkillPill key={skill} skill={skill} />)}
      </div>
      <h2 className='text-light-500 font-bold mb-5 underline text-3xl'>CloudOps</h2>
      <div className="flex flex-wrap text-light-500 gap-2 mb-3">
        {skills.cloudOps.map(skill => <SkillPill key={skill} skill={skill} />)}
      </div>
    </div>
  )
}
