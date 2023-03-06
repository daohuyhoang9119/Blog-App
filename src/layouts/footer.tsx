import {
  GithubOutlined,
  LinkedinOutlined,
  MediumOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";

function Footer() {
  return (
    <footer className="font-mono bg-gray-50 border-t border-gray-200 pt-16 pb-16">
      <div className="max-w-xl mx-auto">
        <p className="font-bold text-gray-800">About this place</p>
        <p className="mt-2">Welcome to my digital diary</p>
        <p className="mt-4 text-sm">
          I'm Hoang, a software engineer. On this site, I occasionally write
          programming tutorials and lessons I learned from daily life.
        </p>
        <nav className="mt-6">
          <p className="font-bold text-gray-800">Social Links</p>
          <p className="text-sm">Everywhere I'm online</p>
          <div className="flex flex-row space-x-5 mt-5">
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              <TwitterOutlined />
            </a>
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              <GithubOutlined />
            </a>
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              <MediumOutlined />
            </a>
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              <LinkedinOutlined />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
