import React from "react";
import BlogItem from "../../components/blog/blogitem/BlogItem";

import Header from "./../../components/header/Header";

function Home() {
  return (
    <div className=" mx-10">
      <Header />
      <BlogItem />
    </div>
  );
}

export default Home;
