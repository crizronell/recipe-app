import React from "react";
import Home from "./Home/Home";
import RecipeDetails from "./RecipeDetails/RecipeDetails";
import Searched from "./Searched/Searched";
import { Route, Routes } from "react-router-dom";

function pages() {
  return (
    <Routes>
      <Route path="/recipe-app" element={<Home />}></Route>
      <Route path="/recipe/:id" element={<RecipeDetails />}></Route>
      <Route path="/searched/:search" element={<Searched />}></Route>
     
    </Routes>
  );
}

export default pages;
