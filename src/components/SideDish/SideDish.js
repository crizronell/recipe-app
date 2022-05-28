import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function SideDish() {
  const [sideDish, SetSideDish] = useState([]);
  const getSideDish = async () => {
    const check = localStorage.getItem("sidedish");
    if (check) {
      SetSideDish(JSON.parse(check))
    } else {
      const data = await fetch("https://api.spoonacular.com/recipes/random?apiKey=1cb4db2658814249899f7c558ef03327&number=10&type=sidedish")
      const response = await data.json();
      localStorage.setItem("sidedish", JSON.stringify(response.recipes));
      console.log(response)
      SetSideDish(response.recipes)
      
    }
  };
  useEffect(()=>{
    getSideDish();
  },[])
  return (
    <>
      <div className="container mx-auto p-4 bg-slate-300">
        <p className="text-3xl font-mono font-bold sm:text-2xl">Side Dish</p>
        <Splide options={{
          perPage: 3,
          breakpoints:{
            640:{
              perPage: 1,
            },
            768:{
              perPage: 2,
              gap: "1rem",
            },
          },
          gap: "1rem",
          pagination: false,
          arrows: false,
          snap: true,
        }}>
      {sideDish.map((item)=>{
        return(
          <SplideSlide key={item.id}>
            <div className="relative">
          <img src={item.image} alt={item.title} className=" p-4 mx-auto rounded-lg max-w-full " />
          <p className="flex items-center justify-center  absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 text-2xl font-bold font-sans text-white sm:text-xl lg:text-2xl">{item.title}</p>
          </div>
          </SplideSlide>
        );
      })};
      </Splide>
      </div>
    </>
  );
}

export default SideDish;
