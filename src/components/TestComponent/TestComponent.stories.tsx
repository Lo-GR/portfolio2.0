import TestComponent from "./TestComponent";

export default {
  title: 'Testing/TestComponent',
  component: TestComponent,
}

// const Props = {
//   Standard: {
//     text: "testing this"
//   }
// }

// const Template = (args: {text: string}) => {
//   return (
//     <TestComponent
//       {...args}
//       />
//   )
// }

export const StandardTestComponent = () => (
  <TestComponent />
)
