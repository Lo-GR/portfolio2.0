import classNames from 'classnames';

interface PortraitProps {
  image: string;
  className?: string;
}

export default function Portrait({ image, className }: PortraitProps) {
  return (
    <div className={classNames(className, ' w-full h-full rounded')}>
      <img src={image} alt="portrait of web developer" className='h-full' />
    </div >
  )
}
