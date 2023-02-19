import classNames from "classnames";
import { about } from "../../utils/mockStrapiResponses";
import Design from "../AboutWidgets/Design";
import Goals from "../AboutWidgets/Goals";
import Tech from "../AboutWidgets/Tech";

const About = () => {
  const techProps = about.data.attributes.tech;
  const designProps = about.data.attributes.design;
  const goalsProps = about.data.attributes.goals;
  return (
    <div className={classNames(`flex flex-1 basis-3/5 h-full flex-wrap gap-5 p-3 md:p-10 bg-dark-500 justify-center min-h-[100vh]`)}>
      <Tech tech={techProps} className="flex shrink-1 grow-1 basis-full md:basis-[55%] bg-white" />
      <Design design={designProps} className="flex shrink-1 grow-1 basis-full md:basis-[35%] bg-white" />
      <Goals goals={goalsProps} className="flex shrink-1 grow-1 basis-full md:basis-[calc(90%+20px)] bg-white" />
    </div>
  )
}

export default About;