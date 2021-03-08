import { Layout } from "antd";
import TheNav from "../../components/NavBar";
import { useState } from "react";
import {
  Select
} from "antd";

import axios from "axios";
const { Option } = Select;

const { Content } = Layout;

function AddR() {
  const [recipe, setRecipe] = useState({ _id: '', recipe_name: '', author_name: ''});
  
  const apiUrl = "http://localhost:8080/api/create";


  const saveRecipe = (e) => {
    // setShowLoading(true);
    e.preventDefault();
    const data = { recipe_name: recipe.recipe_name, author_name: recipe.author_name};
    axios.post(apiUrl, data)
      .then((result) => {
       console.log(result.data)
      }).catch((error) =>console.log(error));
  };
  const onChange = (e) => {
    e.persist();
    setRecipe({...recipe, [e.target.name]: e.target.value});
  }
  // function handleRecipeSave() {
  //   const data = {
  //     recipe_name: recipe.rname,
  //   };
  //   console.log(data);
  //   API.addRecipe(data)
  //     .then((res) => {
  //       console.log(res.data);
  //       setRecipe(res.data.recipe);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   // setBooked(true);
  //   // // const recipe = this.state.books.find(book => book.id === id);
  //   // API.addRecipe({

  //   // }).then(console.log("worked"));
  // }

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
