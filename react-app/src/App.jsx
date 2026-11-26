import { useState } from "react";
import Kanban from "./Kanban.jsx";

function App() {
  const [count, setCount] = useState(0);

  return <Kanban />;
}

export default App;
