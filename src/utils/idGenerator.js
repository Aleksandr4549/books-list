export const idGenerator = () => {
  return (Math.trunc(Math.random()*1e8)).toString(16);
};