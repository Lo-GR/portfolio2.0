
const calcHeight = (height: number) => {
  switch (height) {
    case (30):
      return 'h-[30rem]';
    case (15):
      return 'h-[15rem]';
    case (10):
      return 'h-[10rem]';
    case (5):
      return 'h-[5rem]';
    default:
      return 'h-[10rem]';
  }
}

const getHeight = (height: number) => {
  switch (height) {
    case (15):
      return 'h-full md:h-[calc(100%-15rem)]';
    case (20):
      return 'h-full md:h-[calc(100%-20rem)]';
    case (30):
      return 'h-full md:h-[calc(100%-30rem)]';
    default:
      return 'h-full md:h-[calc(100%-30rem)]';
  }
}

export { calcHeight, getHeight };