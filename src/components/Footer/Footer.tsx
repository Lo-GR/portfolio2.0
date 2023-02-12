import { globalConfig } from "../../utils/globalConfig";
import classNames from "classnames";
import { calcHeight } from "../../utils/helpers";

import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface FooterPropTypes {
    linkedinLink: string
}

const Footer = ({ linkedinLink }: FooterPropTypes) => {
    const { height } = globalConfig.footer;
    let footerHeight = calcHeight(height);

    return (
        <div className={classNames(footerHeight, "w-full p-10 bg-dark-500")}>
            <a href={linkedinLink}>
                <LinkedInIcon />
            </a>
        </div>
    )
}

export default Footer;