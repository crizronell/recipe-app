import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const [details, setDetails] = useState({});
  const [active, setActive] = useState("instructions");
  let params = useParams();

  useEffect(() => {
    const getDetails = async () => {
      // const check = localStorage.getItem("details");
      // if (check) {
      //   setDetails(JSON.parse(check));
      // } else {
      //   const data = await fetch(
      //     `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=1cb4db2658814249899f7c558ef03327`
      //   );
      //   const response = await data.json();
      //   localStorage.setItem("details", JSON.stringify(response));
      //   console.log(response);
      //   setDetails(response);
      // }

      const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=1cb4db2658814249899f7c558ef03327`
          );
          const response = await data.json();
          localStorage.setItem("details", JSON.stringify(response));
          console.log(response);
          setDetails(response);

    };
    getDetails();
  }, [params.id]);

  return (
    <>
      <div className=" w-full   grid grid-cols-1  sm:grid-cols-2">
        <div className="p-4">
          <img
            src={details.image}
            alt={details.title}
            className="rounded-xl mx-auto   "
          />
          <p className="font-bold font-mono text-2xl text-center mt-2">
            {details.title}
          </p>
        </div>
        <div className="p-4">
          <div className="space-x-4">
            <button
              className={
                active === "instructions"
                  ? `h-10 px-6 font-semibold rounded-md bg-black text-white`
                  : ""
              }
              onClick={() => setActive("instructions")}
            >
              Instructions
            </button>
            <button
              className={
                active === "ingredients"
                  ? "h-10 px-6 font-semibold rounded-md bg-black text-white"
                  : ""
              }
              onClick={() => setActive("ingredients")}
            >
              Ingredients
            </button>
          </div>
          {active === "instructions" && (
            <div className="max-w-screen-sm md:max-w-screen-md">
              <p
                className="text-justify font-sans text-md lg:text-xl"
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></p>
            </div>
          )}
          {active === "ingredients" && (
            <ul>
              {details.extendedIngredients.map((item) => {
                return (
                  <li className="font-sans text-xl" key={item.id}>
                    {item.original}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default RecipeDetails;
