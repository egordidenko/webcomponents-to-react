const isObjectEmpty = <T>(objectName: T) => {
  return Object.keys(objectName).length === 0;
};

export {
  isObjectEmpty,
};
