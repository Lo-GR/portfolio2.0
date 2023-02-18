import classNames from 'classnames';

interface BackgroundSkillsProps {
  skills: string[]
  className?: string;
}

export default function BackgroundSkills({ skills, className }: BackgroundSkillsProps) {
  return (
    <div className={classNames(className, 'bg-dark-400 w-full h-full p-10 rounded')}>
      <ul className="list-disc flex flex-col flex-wrap w-full h-full text-light-500">
        {skills.map(skill => <li>{skill}</li>)}
      </ul>
    </div>
  )
}
