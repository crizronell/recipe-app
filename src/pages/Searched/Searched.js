import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"

function Searched() {
  const [searchRecipes, setSearchRecipes] = useState([]);
  let params = useParams();
  useEffect(()=>{
    const getSearch = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=1cb4db2658814249899f7c558ef03327&query=${params.search}`
      );
      const response = await data.json();
      localStorage.setItem("searchRecipes", JSON.stringify(response.results));
      console.log(response);
      setSearchRecipes(response.results)
      };
    
    getSearch()
  },[params.search])
  return <div className="container mx-auto border border-8 p-4 mt-4 ">
      <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {searchRecipes.map((item)=>{
              return(
                <diV>
                  <Link to={"/recipe/" +item.id}>
                  <img className="mx-auto rounded-xl " key={item.id} src={item.image} alt={item.title}/>
                  
                  </Link>
                  <p className="text-2xl text-center font-mono font-bold sm:text-xl mt-4">{item.title}</p>
                </diV>
                
              )
          })}
      </div>
 </div>;
}

export default Searched;
