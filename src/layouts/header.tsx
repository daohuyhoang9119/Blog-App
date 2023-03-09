import { useState } from "react";
import { Link } from "react-router-dom";

interface Ititle {
  id: number;
  name: string;
  param: string;
}

function Header() {
  const [count, setCount] = useState(0);
  const titles: Ititle[] = [
    {
      id: 0,
      name: "📝 Blog",
      param: "/",
    },
    {
      id: 1,
      name: "💻 Dev",
      param: "/dev",
    },
    {
      id: 2,
      name: "☕ Random",
      param: "/random",
    },
    {
      id: 3,
      name: "📚 Book",
      param: "/books",
    },
    {
      id: 4,
      name: "💡 Projects",
      param: "/projects",
    },
    {
      id: 5,
      name: "❔ Me",
      param: "/about",
    },
  ];

  return (
    <nav className="sticky backdrop-blur-xl top-0 z-10 border-b-2 bg-gray-50 ">
      <div className=" mx-auto justify-between flex flex-row items-center md:px-4  p-4  max-w-7xl ">
        <h3 className="text-4xl font-bold">Ryan</h3>
        <div className="flex text-base font-sans text-gray-500 font-medium ">
          {titles.map((title: Ititle) => (
            <Link to={title.param} key={title.id.toString()}>
              <p className="mx-4 p-2 hover:border-b hover:font-bold border-stone-700">
                {title.name}
              </p>
            </Link>
          ))}
        </div>
        {/* DARK MODE */}
        <div className="flex flex-row item-center">
          <button
            id="theme-toggle"
            type="button"
            className="text-gray-500 dark:text-gray-400 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            <svg
              id="theme-toggle-dark-icon"
              className="w-7 h-7 hidden"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              className="w-7 h-7 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                // fill-rule="evenodd"
                // clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <a href="/" className="ml-4">
            <img
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Bordered avatar"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
