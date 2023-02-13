import classNames from "classnames";
import { globalConfig } from "../../utils/globalConfig";
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useCycle } from "framer-motion";

const { nav } = globalConfig;

interface MobileNavProps {
  open: boolean;
  handleOpen: any;
}

const MobileNav = ({ open, handleOpen }: MobileNavProps) => {
  const variants = {
    visible: {
      x: 0,
      transition: {
        duration: .5,
      },
    },
    hidden: {
      x: -800,
      transition: {
        duration: .5,
      },
    }
  }

  const location = useLocation();

  console.log(open);

  return (
    <AnimatePresence>
      {open &&
        <motion.div variants={variants} initial="hidden" animate="visible" exit="hidden" className={classNames("bg-dark-500 h-full w-full absolute inset-0")}>
          <div onClick={() => handleOpen()} className="flex flex-col gap-10 text-center text-3xl uppercase justify-center h-full">
            {
              nav.map((element, index) => {
                return (
                  <Link to={`${element.to}`}><p className={location.pathname === element.to ? "text-highlight" : "text-light-500"}>{element.name}</p></Link>
                )
              })
            }
          </div>
        </motion.div>

      }
    </AnimatePresence >
  )
}

export default MobileNav;