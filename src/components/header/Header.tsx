import { useState } from "react";
import { Button, Radio, Space, Divider } from "antd";
function Header() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between items-center mb-5 py-10  border-b-2 bg-gray-50 ">
      <h3 className="text-4xl font-bold">Ryan</h3>
      <ul className="flex text-lg font-mono font-semibold">
        <li className="mx-2">
          <a href="/">Blog</a>
        </li>
        <li className="mx-2">
          <a href="/">Dev</a>
        </li>
        <li className="mx-2">
          <a href="/">Random</a>
        </li>
        <li className="mx-2">
          <a href="/">About</a>
        </li>
      </ul>
      <div className="">
        <Button type="text" shape="round" size="large">
          <p className="font-semibold">Hire Me!</p>
        </Button>
      </div>
    </div>
  );
}

export default Header;
