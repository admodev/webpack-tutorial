import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [values, setValues] = useState();

  const handleClick = () => {
    setCounter(counter + 1);
    setValues(values.concat(counter));
  };

  return (
    <div className="container">
      <h1>Hola!</h1>
      <div>
        <button onClick={handleClick}>Presiona Aqui</button>
      </div>
      <div>
        <strong>Cuenta: {counter}</strong>
      </div>
    </div>
  );
};
export default App;
