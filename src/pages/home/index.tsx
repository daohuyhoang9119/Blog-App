import React from "react";
import Blog from "../../components/blog/blog";
import BlogItem from "../../components/blog/blogitem/BlogItem";
import Footer from "../../layouts/footer";
import Header from "../../layouts/header";

function Home() {
  return (
    <div className=" px-4  bg-slate-50">
      <Header />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;
