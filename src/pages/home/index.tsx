import React from "react";
import Blog from "../../components/blog/blog";
import BlogItem from "../../components/blog/blogitem/BlogItem";
import Info from "../../components/Info/Info";
import Footer from "../../layouts/footer";
import Header from "../../layouts/header";

function Home() {
  return (
    <div className="">
      <Header />
      <div className="bg-white mx-44">
        <Info />
        <Blog />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
