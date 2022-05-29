import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => { 
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <div className="container mx-auto  flex justify-center mt-4">
      <form onSubmit={onSubmit}>
      <input  onChange={onChange} value={input} className=" focus:outline-none  border border-slate-300  w-full sm:w-[30rem] text-xl leading-6 placeholder:italic placeholder:text-slate-400 rounded-full py-2 pl-10  shadow-md" type="text"  placeholder="Search Recipe..."/>
        
      </form>
    </div>
  );
}

export default SearchBar;
