import Skills from "./Skills";

export default {
  title: 'Home/Skills',
  component: Skills,
}

export const SkillsComponent = () => (
  <Skills topText={"top text"} skills={["skill1,", "skill2,", "skill1,", "skill2",]} />
)