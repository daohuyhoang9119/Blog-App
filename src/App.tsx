import { useState } from "react";
import "./App.css";
import Home from "./pages/home/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layouts/footer";
import About from "./pages/about/index";
import Books from "./pages/books/index";
import Random from "./pages/random/index";
import Header from "./layouts/header";
import BlogInfo from "./components/blog/blog-Info/index";
import Page404 from "./pages/404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/blog/:slug" element={<BlogInfo />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/random" element={<Random />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
