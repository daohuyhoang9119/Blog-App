import { useState } from "react";
import { Button, Radio, Space, Divider } from "antd";
function Header() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between items-center my-10 py-10 mx-10 border-y-2 ">
      <h3 className="text-2xl font-mono font-bold">Huy Hoang</h3>
      <div className="flex text-lg font-mono font-semibold">
        <p className="mx-2">Code</p>
        <p className="mx-2">Work</p>
        <p className="mx-2">Contact</p>
      </div>
      <div className="">
        <Button type="text" shape="round" size="large">
          <p className="font-semibold">Hire Me!</p>
        </Button>
      </div>
    </div>
  );
}

export default Header;
