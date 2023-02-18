import classNames from "classnames";
import FrontendTidbit from "../HomeWidgets/FrontendTidbit";
import Greeting from "../HomeWidgets/Greeting";
import LinkedIn from "../HomeWidgets/LinkedIn";
import Skills from "../HomeWidgets/Skills";
import { home } from "../../utils/mockStrapiResponses";

export default function Home() {
  const frontendTidbitProps = home.data.attributes.widget2;
  const GreetingProps = home.data.attributes.widget1;
  const LinkedInProps = home.data.attributes.widget3;
  const SkillsProps = home.data.attributes.widget4;

  return (
    <div className={classNames(`flex flex-1 basis-3/5 h-full flex-wrap gap-5 p-3 md:p-10 bg-dark-500 justify-center  overflow-y-scroll`)}>
      <FrontendTidbit className="flex shrink-1 grow-1 basis-full md:basis-[55%]" title={frontendTidbitProps.title} list={frontendTidbitProps.subtitle} />
      <Greeting className="flex shrink-1 grow-1 basis-full md:basis-[35%]" hello={GreetingProps.hello} name={GreetingProps.name} subtext={GreetingProps.subtext} />
      <LinkedIn className="flex shrink-1 grow-1 basis-full md:basis-[35%]" linkedinText={LinkedInProps.linkedinText} linkedinProfilePic={LinkedInProps.linkedinProfilePic} linkedinURL={LinkedInProps.linkedinURL} />
      <Skills className="flex shrink-1 grow-1 basis-full md:basis-[55%]" topText={SkillsProps.topText} skills={SkillsProps.skills} />
    </div>
  )
}
