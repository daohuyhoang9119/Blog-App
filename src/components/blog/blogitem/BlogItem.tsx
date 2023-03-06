import React from "react";
interface IBlogItem {
  blogImg: string;
}

function BlogItem({ blogImg }: IBlogItem) {
  return (
    // <div className="font-mono p-10 hover:shadow-xl cursor-pointer">
    //   <a href="/">
    //     <img
    //       src={blogImg}
    //       alt=""
    //       className="w-[45rem] h-[25rem] object-fill rounded-lg"
    //     />
    //   </a>
    //   <div className="font-mono">
    //     <p className="font-bold text-base mt-4">28 February 2023</p>
    //     <a href="/" className="mt-4 font-bold  text-xl">
    //       React project with ViteJS
    //     </a>
    //     <p className="text-sm mt-4 pb-2">
    //       Some interesting inspirations and camera settings during photo
    //       sessions in the studio. Thanks to this, your photos will be even
    //       better...
    //     </p>
    //     <button className="rounded-lg hover:bg-gray-200 p-2">
    //       <a href="/" className="font-bold text-sm">
    //         Read more 🔑
    //       </a>
    //     </button>
    //   </div>
    // </div>

    <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-sans">
      <a href="#">
        <p className="mb-2 text-sm font-medium tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </p>
      </a>
      <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </div>
  );
}

export default BlogItem;
