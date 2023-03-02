import React from "react";
import Blog from "../../components/blog/blog";
import BlogItem from "../../components/blog/blogitem/BlogItem";
import Footer from "../../components/footer/Footer";

import Header from "./../../components/header/Header";

function Home() {
  return (
    <div className=" px-10 bg-slate-50">
      <Header />
      <Blog />
      {/* <BlogItem /> */}
      <Footer />
    </div>
  );
}

export default Home;
