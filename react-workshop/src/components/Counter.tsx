let count = 0;

export const Counter = () => {
  const increment = () => {
    count = count + 1;
    console.log({ count });
  };

  return <button onClick={increment}>{count}</button>;
};
