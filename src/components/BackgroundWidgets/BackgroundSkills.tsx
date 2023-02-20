import classNames from 'classnames';
import SkillPill from './SkillPill';
import { motion } from "framer-motion";

interface BackgroundSkillsProps {
  skills: {
    frontend: string[];
    backend: string[];
    cloudOps: string[];
  }
  className?: string;
}

export default function BackgroundSkills({ skills, className }: BackgroundSkillsProps) {
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .5,
        delay: .1
      },
    },
    hidden: {
      opacity: 0,
      y: 800,
      transition: {
        duration: .5,
      },
    }
  }
  return (
    <motion.div variants={variants} initial="hidden" animate="visible" exit="hidden" className={classNames(className, 'bg-dark-400 w-full flex flex-col p-10 rounded')}>
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
    </motion.div>
  )
}
