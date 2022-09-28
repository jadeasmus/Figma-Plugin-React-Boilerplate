import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("react-page");
const root = createRoot(container!);
root.render(<App />);

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}
