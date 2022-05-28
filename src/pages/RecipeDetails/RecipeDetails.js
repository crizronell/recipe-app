import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const [details, setDetails] = useState({});
  const [active, setActive] = useState("instructions");
  let params = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const check = localStorage.getItem("details");
      if (check) {
        setDetails(JSON.parse(check));
      } else {
        const data = await fetch(
          `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=1cb4db2658814249899f7c558ef03327`
        );
        const response = await data.json();
        localStorage.setItem("details", JSON.stringify(response));
        console.log(response);
        setDetails(response);
      }
    };
    getDetails();
  }, [params.id]);

  return (
    <>
      <div className="container mx-auto p-4 bg-slate-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          <div>
            <img
              src={details.image}
              alt={details.title}
              className="rounded-xl max-w-ful"
            />
            <p>{details.title}</p>
          </div>
          <div className="">
            <button
              className={active === "instructions" ? `bg-blue-300` : ""}
              onClick={() => setActive("instructions")}
            >
              Instructions
            </button>
            <button
              className={active === "ingredients" ? `bg-blue-300` : ""}
              onClick={() => setActive("ingredients")}
            >
              Ingredients
            </button>
            {active === "instructions" && (
              <div>
                <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
              </div>
            )}
            {active === "ingredients" && (
              <ul>
                {details.extendedIngredients.map((item) => {
                  return <li key={item.id}>{item.original}</li>;
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetails;
