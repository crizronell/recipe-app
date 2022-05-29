import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Searched() {
  const [searchRecipes, setSearchRecipes] = useState([]);
  let params = useParams();
  useEffect(()=>{
    const getSearch = async () => {
        const check = localStorage.getItem("searchRecipes")
        if(check){
            setSearchRecipes(JSON.parse(check))
        }else{
            const data = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=1cb4db2658814249899f7c558ef03327&query=${params.search}`
              );
              const response = await data.json();
              localStorage.setItem("searchRecipes", JSON.stringify(response.results));
              console.log(response);
              setSearchRecipes(response.results)
        }
       
    
      };
    getSearch()
  },[params.search])
  return <div className="container mx-auto border border-8 p-4 mt-4 ">
      <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {searchRecipes.map((item)=>{
              return(
                  <img className="mx-auto rounded-xl " key={item.id} src={item.image} alt={item.title}/>
              )
          })}
      </div>
 </div>;
}

export default Searched;
