import classNames from 'classnames';

interface BlurbProps {
  experience: string;
  className?: string;
}
export default function Blurb({ experience, className }: BlurbProps) {
  return (
    <div className={classNames(className, 'bg-dark-400 w-full p-10 rounded')}>
      <p className='text-light-500'> {experience} </p>
    </div>
  )
}
