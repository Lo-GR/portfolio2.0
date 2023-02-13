import { globalConfig } from "../../utils/globalConfig";
import classNames from "classnames";
import { calcHeight } from "../../utils/helpers";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

interface FooterPropTypes {
    linkedinURL: string,
    email: string,
    githubURL: string
}

const Footer = ({ linkedinURL, email, githubURL }: FooterPropTypes) => {
    const { height } = globalConfig.footer;
    let footerHeight = calcHeight(height);

    return (
        <div className={classNames(footerHeight, "w-full p-10 bg-dark-500 flex items-center")}>
            <div className="w-52 flex justify-between mx-auto md:mx-0">
                <div>
                    <a href={linkedinURL} className="bg-dark-400 rounded-full p-1 flex content-center w-8">
                        <LinkedInIcon sx={{ color: "#FFFCF2" }} />
                    </a>
                </div>
                <div>
                    <a href={email} className="bg-dark-400 rounded-full p-1 flex content-center w-8">
                        <GitHubIcon sx={{ color: "#FFFCF2" }} />
                    </a>
                </div>
                <div>
                    <a href={githubURL} className="bg-dark-400 rounded-full p-1 flex content-center w-8" >
                        <EmailIcon sx={{ color: "#FFFCF2" }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;