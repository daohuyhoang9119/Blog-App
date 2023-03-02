import React from "react";
interface IBlogItem {
  blogImg: string;
}

function BlogItem({ blogImg }: IBlogItem) {
  return (
    <div className="font-mono p-10 hover:shadow-xl cursor-pointer">
      <a href="/">
        <img src={blogImg} alt="" className=" h-50 w-full rounded-lg" />
      </a>
      <div className="">
        <p className="font-bold text-base mt-2">28 February 2023</p>
        <a href="/" className="font-bold text-xl">
          React project with ViteJS
        </a>
        <p className="text-sm pb-2">
          Some interesting inspirations and camera settings during photo
          sessions in the studio. Thanks to this, your photos will be even
          better...
        </p>
        <a href="" className="font-bold text-sm">
          Read more
        </a>
      </div>
    </div>
  );
}

export default BlogItem;
