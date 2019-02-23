export default () =>
  new Promise((res, rej) => {
    return setTimeout(() => {
      return res('Alex');
    }, 1000);
  });
