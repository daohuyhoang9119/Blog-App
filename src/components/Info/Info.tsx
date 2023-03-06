import { useState } from "react";
import { Button } from "antd";

function Info() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-sans mx-28 my-7">
      <p className="font-extrabold text-4xl text-gray-900">
        Hey, I'm Huy Hoang,
      </p>
      <p className="text-sm mt-6">
        I write this blog to share my thoughts, experiences about Frontend,
        Engineer and everything I read.🌊🌊🌊
      </p>
      <p className="text-sm mt-2">
        I'm on the way to become a software developer
      </p>
      <div className="mt-4">
        <a
          href="/"
          className=" hover:bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-3 py-2 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-200"
        >
          🌟 Software Engineer
        </a>
        <a
          href="/"
          className=" hover:bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-3 py-2 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-200"
        >
          ✨ Frontend
        </a>
        <a
          href="/"
          className=" hover:bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-3 py-2 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-200"
        >
          ☕ Thoughts
        </a>
        <a
          href="/"
          className=" hover:bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-3 py-2 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-200"
        >
          🙏 Study
        </a>
        <a
          href="/"
          className=" hover:bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-3 py-2 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-200"
        >
          👏 Fashion
        </a>
      </div>
    </div>
  );
}

export default Info;
