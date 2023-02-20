import classNames from 'classnames'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface TechProps {
  tech: string;
  className?: string;
}

export default function Tech({ tech, className }: TechProps) {
  return (
    <div className={classNames(className, 'bg-dark-400 w-full p-8 rounded flex flex-col')}>
      <h2 className='text-highlight font-bold mb-5 underline text-4xl'>Tech</h2>
      <ReactMarkdown className='text-light-500 text-lg leading-loose font-mono'>{tech}</ReactMarkdown>
    </div>
  )
}
