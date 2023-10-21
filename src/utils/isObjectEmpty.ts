const isObjectEmpty = <T>(objectName: T) => {
  // @ts-ignore
  return Object.keys(objectName).length === 0;
};

export {
  isObjectEmpty,
};
