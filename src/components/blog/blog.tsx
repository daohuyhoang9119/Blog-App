import React from "react";
import BlogItem from "./blogitem/BlogItem";

function Blog() {
  interface IBlogItem {
    title: string;
    id: number;
    imgSource: string;
  }

  const blogList: IBlogItem[] = [
    {
      id: 1,
      title: "Dog",
      imgSource:
        "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Dog",
      imgSource:
        "https://images.pexels.com/photos/7562114/pexels-photo-7562114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Dog",
      imgSource:
        "https://images.pexels.com/photos/11178057/pexels-photo-11178057.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      title: "Dog",
      imgSource:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Dog",
      imgSource:
        "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 6,
      title: "Dog",
      imgSource:
        "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 7,
      title: "Dog",
      imgSource:
        "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 8,
      title: "Dog",
      imgSource:
        "https://images.pexels.com/photos/3945682/pexels-photo-3945682.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 9,
      title: "Dog",
      imgSource:
        "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 10,
      title: "Dog",
      imgSource:
        "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 11,
      title: "Dog",
      imgSource:
        "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 12,
      title: "Dog",
      imgSource:
        "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 13,
      title: "Dog",
      imgSource:
        "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className=" grid xl:grid-cols-2 xl:gap-4 md:gap-5  sm:grid-cols-2  mx-28 mb-28 pb-20  rounded-2xl">
      {blogList.map((item) => (
        <BlogItem key={item.id} blogImg={item.imgSource} />
      ))}
    </div>
  );
}

export default Blog;
