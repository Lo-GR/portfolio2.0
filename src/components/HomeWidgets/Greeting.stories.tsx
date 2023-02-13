import Greeting from "./Greeting";

export default {
  title: 'Home/Greeting',
  component: Greeting,
}

export const GreetingComponent = () => (
  <Greeting hello="hello" name="name" subtext="subtext subtext subtext" />
)