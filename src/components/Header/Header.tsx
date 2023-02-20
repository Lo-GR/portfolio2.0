import { fetchHeader } from "../../utils/strapiAPIs"
import { globalConfig } from "../../utils/globalConfig";
import classNames from "classnames";
import { calcHeight } from "../../utils/helpers";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface HeaderProps {
  handleOpen: any;
  open: boolean;
}

export default function Header({ open, handleOpen }: HeaderProps) {
  const title = fetchHeader();
  const { height } = globalConfig.header;
  let headerHeight = calcHeight(height);


  return (
    <div className={classNames(headerHeight, 'p-10 bg-dark-500 w-full flex')}>
      <h1 className='text-light-500 text-5xl flex-1 flex items-center opacity-75'>{title.toUpperCase()}</h1>
      <div className="text-white flex items-center md:hidden">
        {
          open ? <CloseIcon fontSize="large" onClick={() => handleOpen()} /> : <MenuIcon fontSize="large" onClick={() => handleOpen()} />
        }
      </div>
    </div >
  )
}