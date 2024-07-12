// src/components/Home.js
import "./styles.css";
import React, { useState } from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
const initState = {
  books: [
    {
      id: 1,
      title: "مقدمة ابن خلدون",
      author: "ابن خلدون",
      isbn: "1289499030",
    },
    {
      id: 2,
      title: "الحاوي في الطب",
      author: "ابو بكر الرازي",
      isbn: "893847239479",
    },
    {
      id: 3,
      title: "البيان والتبيين",
      author: "الجاحظ",
      isbn: "9789953874772",
    },
    {
      id: 4,
      title: "الأغاني",
      author: "أبو الفرج الأصفهاني",
      isbn: "9789953334882",
    },
    {
      id: 5,
      title: "تفسير الأحلام",
      author: "ابن سيرين",
      isbn: "9789953612165",
    },
  ],
};

const Home = () => {
  const [books] = useState(initState.books);
  return (
    <div>
      <Header />
      <Main books={books} />
      <Footer />
    </div>
  );
};

export default Home;
