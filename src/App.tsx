import { useState } from "react";
import "./App.css";
import { Button } from "antd";
import Header from "./pages/header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white">
      <Header />
    </div>
  );
}

export default App;
