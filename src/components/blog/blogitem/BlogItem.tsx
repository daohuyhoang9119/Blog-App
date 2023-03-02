import React from "react";
interface IBlogItem {
  blogImg: string;
}

function BlogItem({ blogImg }: IBlogItem) {
  return (
    <div className="font-mono p-10 hover:shadow-xl cursor-pointer">
      <a href="/">
        <img src={blogImg} alt="" className="w-full rounded-lg" />
      </a>
      <div className="font-mono">
        <p className="font-bold text-base mt-4">28 February 2023</p>
        <a href="/" className="mt-4 font-bold  text-xl">
          React project with ViteJS
        </a>
        <p className="text-sm mt-4 pb-2">
          Some interesting inspirations and camera settings during photo
          sessions in the studio. Thanks to this, your photos will be even
          better...
        </p>
        <button className="rounded-lg hover:bg-gray-200 p-2">
          <a href="/" className="font-bold text-sm">
            Read more 🔑
          </a>
        </button>
      </div>
    </div>
  );
}

export default BlogItem;
