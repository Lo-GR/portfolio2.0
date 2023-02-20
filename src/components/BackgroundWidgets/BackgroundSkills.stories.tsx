import BackgroundSkills from "./BackgroundSkills";

export default {
  title: 'Background/BackgroundSKills',
  component: BackgroundSkills
}

export const BackgroundSkillsComponent = () => <BackgroundSkills skills={{ frontend: ["skill1,", "skill2,", "skill1,", "skill2",], backend: ["skill1,", "skill2,", "skill1,", "skill2",], cloudOps: ["skill1,", "skill2,", "skill1,", "skill2",] }} className="" />