import classNames from "classnames";

const About = () => {
  return (
    <div className={classNames(`flex flex-1 basis-3/5 h-full flex-wrap gap-5 p-3 md:p-10 bg-dark-500 justify-center`)}>
      <div className="flex shrink-1 grow-1 basis-full md:basis-[55%] bg-white" />
      <div className="flex shrink-1 grow-1 basis-full md:basis-[35%] bg-white" />
      <div className="flex shrink-1 grow-1 basis-full md:basis-[calc(90%+20px)] bg-white" />
    </div>
  )
}

export default About;