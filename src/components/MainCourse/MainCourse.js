import React, { useState, useEffect } from "react";

function MainCourse() {
  const [maincourse, setMainCourse] = useState([]);
  const getMainCourse = async () => {
    const data = await fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=1cb4db2658814249899f7c558ef03327&number=10&type=maincourse"
    );
    const response = await data.json();
    console.log(response);
    setMainCourse(response.recipes);
  };

  useEffect(() => {
    getMainCourse();
  }, []);

  return (
    <div>
      {maincourse.map((item) => {
        return <img src={item.image} />;
      })}
    </div>
  );
}

export default MainCourse;
