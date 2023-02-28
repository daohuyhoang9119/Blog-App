import { Avatar, Card, Space } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import React from "react";
const { Meta } = Card;

function BlogItem() {
  return (
    <div className="font-mono w-1/3">
      <a href="/">
        <img
          src="https://plus.unsplash.com/premium_photo-1671611822374-4719df5c89bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
          className=" h-[40rem] w-fit"
        />
      </a>
      <div className="">
        <p className="font-bold text-base">28 February 2023</p>
        <a href="/" className="font-bold text-xl">
          React project with ViteJS
        </a>
        <p className="text-sm pb-2">
          Some interesting inspirations and camera settings during photo
          sessions in the studio. Thanks to this, your photos will be even
          better. We have create.
        </p>
        <a href="" className="font-bold text-sm">
          Read more
        </a>
      </div>
    </div>
  );
}

export default BlogItem;
