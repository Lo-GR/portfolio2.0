import FrontendTidbit from "./FrontendTidbit";

export default {
  title: 'Home/FrontendTidbit',
  component: FrontendTidbit,
}

export const FrontendTidbitComponent = () => (
  <FrontendTidbit title="Front-end" list={["Developer", "Engineer", "Enjoyer"]} />
)