import classNames from 'classnames'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { motion } from "framer-motion";

interface TechProps {
  tech: string;
  className?: string;
}

export default function Tech({ tech, className }: TechProps) {
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
    <motion.div variants={variants} initial="hidden" animate="visible" exit="hidden" className={classNames(className, 'bg-dark-400 w-full p-8 rounded flex flex-col')}>
      <h2 className='text-highlight font-bold mb-5 underline text-4xl'>Tech</h2>
      <ReactMarkdown className='text-light-500 text-lg leading-loose font-mono'>{tech}</ReactMarkdown>
    </motion.div>
  )
}
