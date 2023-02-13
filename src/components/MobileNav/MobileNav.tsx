import classNames from "classnames";
import { globalConfig } from "../../utils/globalConfig";
import { Link } from 'react-router-dom'
const { nav } = globalConfig;

interface MobileNavProps {
  open: boolean;
}

const MobileNav = ({ open }: MobileNavProps) => {

  const isOpen = open ? 'flex' : 'hidden';

  return (
    <div className={classNames(isOpen, "bg-dark-500 text-light-500 h-full w-full absolute inset-0")}>
      <div className="flex flex-col gap-10 text-center text-3xl uppercase justify-center h-full">
        {
          nav.map((element, index) => {
            return (
              <Link to={`${element.to}`}>{element.name}</Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default MobileNav;