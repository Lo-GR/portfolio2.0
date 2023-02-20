import classNames from 'classnames';
import ReactMarkdown from 'react-markdown'
import { motion } from "framer-motion";

interface BlurbProps {
  experience: string;
  className?: string;
}
export default function Blurb({ experience, className }: BlurbProps) {
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .5,
        delay: .15
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
    <motion.div variants={variants} initial="hidden" animate="visible" exit="hidden" className={classNames(className, 'bg-dark-400 w-full p-10 rounded')}>
      <ReactMarkdown className='text-light-500 text-lg leading-loose font-mono'>{experience}</ReactMarkdown>
    </motion.div>
  )
}
