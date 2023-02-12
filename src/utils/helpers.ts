const calcHeight = (height: number) => {
  switch (height) {
    case (15):
      return 'h-[15rem]';
    default:
      return 'h-[10rem]';
  }
}

export { calcHeight };