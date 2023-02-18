import classNames from 'classnames';
import SkillPill from './SkillPill';

interface BackgroundSkillsProps {
  skills: string[]
  className?: string;
}

export default function BackgroundSkills({ skills, className }: BackgroundSkillsProps) {
  return (
    <div className={classNames(className, 'bg-dark-400 w-full h-full p-10 rounded')}>
      <div className="flex flex-col flex-wrap text-light-500">
        {skills.map(skill => <SkillPill skill={skill} />)}
      </div>
    </div>
  )
}
