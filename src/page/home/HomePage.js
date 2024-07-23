import React from "react";
import Head from "./components/head";
import Content from "./components/content";
import Contact from "./components/contact";
import Detail from "./components/detail/Detail";
import { Route, Routes } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Head />
      <Routes>
        <Route path="detail" element={<Detail />} />
        <Route index element={<Content />} />

        {/* <Route path='*' element={<Notfound />} />
        <Route path='bang-gia/:url_category' element={<ProductList />} /> */}
      </Routes>
    </div>
  );
}

export default HomePage;
