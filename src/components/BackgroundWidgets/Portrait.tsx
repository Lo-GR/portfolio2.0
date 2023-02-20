import classNames from 'classnames';
import { motion } from "framer-motion";

interface PortraitProps {
  image: string;
  className?: string;
}

export default function Portrait({ image, className }: PortraitProps) {
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        duration: .5,
        delay: .1
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: .5,
      },
    }
  }
  return (
    <motion.div variants={variants} initial="hidden" animate="visible" exit="hidden" className={classNames(className, 'w-full rounded relative')}>
      <img src={image} alt="portrait of web developer" className='object-cover ' />
    </motion.div >
  )
}
