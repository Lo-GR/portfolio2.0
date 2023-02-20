import { motion } from "framer-motion";
import classNames from 'classnames';

interface SkillsProps {
  topText: string;
  skills: string[];
  className?: string;
}

export default function Skills({ topText, skills, className = "" }: SkillsProps) {
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .5,
        delay: .2
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
    <motion.div variants={variants} initial="hidden" animate="visible" exit="hidden" className={classNames(className, 'bg-dark-400 w-full p-10 text-4xl rounded')}>
      <div>
        <p className=' text-highlight font-bold mb-8'>
          {topText}
        </p>
        <p className='text-light-500 leading-relaxed font-mono'>
          {skills.map(skill => `${skill} `)}
        </p>
      </div>
    </motion.div>
  )
}
