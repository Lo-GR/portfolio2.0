
import classNames from 'classnames';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface LinkedInProps {
  linkedinText: string;
  linkedinURL: string;
  className?: string;
}
export default function LinkedIn({ linkedinText, linkedinURL, className = "" }: LinkedInProps) {
  return (
    <div className={classNames(className, 'linkedin-container bg-dark-400 w-full p-8 text-4xl rounded')}>
      <div className="w-full flex justify-content items-center flex-col">
        <a href={linkedinURL} target="_blank" rel="noreferrer" className="w-full h-full flex justify-around items-center flex-col">
          <LinkedInIcon sx={{ fontSize: '12rem', color: '#FFFCF2' }} />
          <p className='text-light-500 font-bold'>
            {linkedinText}
          </p>
        </a>
      </div>
    </div>
  )
}
