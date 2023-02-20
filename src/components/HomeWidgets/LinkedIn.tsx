import { motion } from "framer-motion";
import classNames from 'classnames';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface LinkedInProps {
  linkedinText: string;
  linkedinURL: string;
  className?: string;
}
export default function LinkedIn({ linkedinText, linkedinURL, className = "" }: LinkedInProps) {

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
    <motion.div variants={variants} initial="hidden" animate="visible" exit="hidden" className={classNames(className, 'linkedin-container bg-dark-400 w-full p-8 text-4xl rounded')}>
      <div className="w-full flex justify-content items-center flex-col">
        <a href={linkedinURL} target="_blank" rel="noreferrer" className="w-full h-full flex justify-around items-center flex-col">
          <LinkedInIcon sx={{ fontSize: '12rem', color: '#FFFCF2' }} />
          <p className='text-light-500 font-bold'>
            {linkedinText}
          </p>
        </a>
      </div>
    </motion.div>
  )
}
