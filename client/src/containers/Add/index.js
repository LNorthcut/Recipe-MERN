import { Layout } from "antd";
import TheNav from "../../components/NavBar";
import { useState, useEffect } from "react";
import {
  Select
} from "antd";

import axios from "axios";
const { Option } = Select;

const { Content } = Layout;

function AddR() {
  // creating a state that will take in an array of data
  const [recipe, setRecipe] = useState({ _id: '', recipe_name: '', author_name: ''});
  
  // placing the url in reuseable variable 
  const apiUrl = "http://localhost:8080/api/create";

// creating the main function (the post axios call)
  const saveRecipe = (e) => {
    // setShowLoading(true);
    e.preventDefault();

    // creating a const that will map the data with its corresponding "columns"
    const data = { recipe_name: recipe.recipe_name, author_name: recipe.author_name};
    axios.post(apiUrl, data)
      .then((result) => {
       console.log(result.data)
      }).catch((error) =>console.log(error));
  };

  // creating a reuseable onchange method
  const onChange = (e) => {
    e.persist();
    setRecipe({...recipe, [e.target.name]: e.target.value});
  }


  return (
    <>
      <TheNav />
      <Content>
      
        <input
        type="text" name="recipe_name" id="recipe_name" placeholder="Enter recipe name" value={recipe.r_name} onChange={onChange} 
          className="btn btn-primary ml-2"
        ></input>


        <input
        type="text" name="author_name" id="author_name" placeholder="Enter author name" value={recipe.a_name} onChange={onChange} 
          className="btn btn-primary ml-2"
        ></input>
        <button onClick={saveRecipe}>Save</button>
      </Content>
    </>
  );
}

export default AddR;
