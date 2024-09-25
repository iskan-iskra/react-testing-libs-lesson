import { useState } from "react";

const AppCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Счетчик: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Увеличить</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Уменьшить</button>
      <button onClick={() => setCount(0)}>Сбросить</button>
    </div>
  );
};

export default AppCounter;
