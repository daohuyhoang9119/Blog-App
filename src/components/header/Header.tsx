import { useState } from "react";
import { Button } from "antd";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between items-center mb-5 py-10  border-b-2 bg-gray-50 ">
      <h3 className="text-4xl font-bold">Ryan</h3>
      <ul className="flex text-lg font-mono font-semibold">
        <li className="mx-2 hover:border-b-2 border-stone-700">
          <a href="/">📙 Blog</a>
        </li>
        <li className="mx-2 hover:border-b-2 border-stone-700">
          <a href="/">💻 Dev</a>
        </li>
        <li className="mx-2 hover:border-b-2 border-stone-700">
          <a href="/">☕ Random</a>
        </li>
        <li className="mx-2 hover:border-b-2 border-stone-700">
          <a href="/">❔ About</a>
        </li>
      </ul>
      {/* <div className="">
        <Button type="text" shape="round" size="large">
          <p className="font-semibold">Hire Me!</p>
        </Button>
      </div> */}
      <button></button>
    </div>
  );
}

export default Header;
