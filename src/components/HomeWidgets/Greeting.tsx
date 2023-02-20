import classNames from 'classnames';
import { motion } from "framer-motion";

interface GreetingProps {
  hello: string;
  name: string;
  subtext: string;
  className?: string;
}
export default function Greeting({ hello, name, subtext, className = "" }: GreetingProps) {
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .5,
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
    <motion.div variants={variants} initial="hidden" animate="visible" exit="hidden" className={classNames(className, 'greeting-container bg-dark-400 w-full p-10 text-4xl rounded')}>
      <div>
        <p className='text-light-500 font-bold mb-8'>
          {hello} <span className='text-highlight'>{name}</span>
        </p>
        <p className='text-light-500 leading-relaxed font-mono'>
          {subtext}
        </p>
      </div>
    </motion.div>
  )
}
