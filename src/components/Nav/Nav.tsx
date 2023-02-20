import classNames from "classnames";
import { globalConfig } from "../../utils/globalConfig";
import { Link, useLocation } from 'react-router-dom'

const { nav } = globalConfig;

const Nav = () => {
    const location = useLocation();
    return (
        <div className={classNames("flex-1 basis-48 bg-dark-500 h-full hidden md:block border-r border-light-500 ")}>
            <div className="flex flex-col gap-10 text-center text-3xl uppercase justify-center h-full">
                {
                    nav.map((element) => {
                        return (
                            <Link key={element.to} to={`${element.to}`}><p className={classNames((location.pathname === element.to ? "text-highlight" : "text-light-500"))}>{element.name}</p></Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Nav;