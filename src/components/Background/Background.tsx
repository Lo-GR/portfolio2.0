import classNames from "classnames";
import BackgroundSkills from "../BackgroundWidgets/BackgroundSkills";
import Blurb from "../BackgroundWidgets/Blurb";
import Portrait from "../BackgroundWidgets/Portrait";
import { background } from "../../utils/mockStrapiResponses";

const Background = () => {
  const backgroundSkillsProps = background.data.attributes.skills;
  const blurbProps = background.data.attributes.experience;
  const portraitProps = background.data.attributes.image;

  return (
    <div className={classNames(`flex flex-1 basis-3/5 flex-wrap gap-5 p-3 md:p-10 bg-dark-500 justify-center overflow-y-scroll scrollbar-hide`)}>
      <Portrait className="flex shrink-1 grow-1 basis-full md:basis-[35%]" image={portraitProps} />
      <BackgroundSkills className="flex shrink-1 grow-1 basis-full md:basis-[55%]" skills={backgroundSkillsProps} />
      <Blurb className="flex shrink-1 grow-1 basis-full md:basis-[calc(90%+20px)]" experience={blurbProps} />
    </div>
  )
}

export default Background;