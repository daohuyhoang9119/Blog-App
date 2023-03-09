import React from "react";
interface IBlogItem {
  blogImg: string;
}

function BlogItem({ blogImg }: IBlogItem) {
  return (
    <div className="selection:bg-green-200">
      <a href="">
        <div className=" p-6 bg-white border border-gray-200 hover:border-green-600 rounded-xs shadow dark:bg-gray-800 dark:border-gray-700 font-sans">
          <p className="tracking-wide  text-sm text-gray-400 mb-1">
            Match 7,2023
          </p>
          <a href="#">
            <p className="mb-2 text-sm font-medium tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </p>
          </a>
          <p className="tracking-wide text-sm font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>
    </div>
  );
}

export default BlogItem;
