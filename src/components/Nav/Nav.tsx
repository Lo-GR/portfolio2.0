import classNames from "classnames";
import { globalConfig } from "../../utils/globalConfig";
import { Link } from 'react-router-dom'

const { nav } = globalConfig;

const Nav = () => {

    return (
        <div className={classNames("flex-1 basis-48 bg-dark-500 text-light-500 h-full hidden md:block")}>
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

export default Nav;