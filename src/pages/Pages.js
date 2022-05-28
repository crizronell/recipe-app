import React from "react";
import Home from "./Home/Home";
import RecipeDetails from "./RecipeDetails/RecipeDetails";
import { Route, Routes } from "react-router-dom";

function pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/recipe/:id" element={<RecipeDetails />}></Route>
     
    </Routes>
  );
}

export default pages;
