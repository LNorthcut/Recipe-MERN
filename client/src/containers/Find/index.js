import { Input, Space } from 'antd';
import { Card, Col, Row } from 'antd';
import { useState, useEffect } from 'react';
import UTILS from '../../utils';
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import "./style.css"
import CContainer from '../../components/ContentContainer';
import TheNav from '../../components/NavBar';
// const onSearch = value => console.log(value);
import axios from 'axios'
const { Header, Footer, Sider, Content } = Layout;


const { Search } = Input;




const Find = ()=>{


const [recipe, getRecipe] = useState(' ');
const getTheRecipe = () => {

  axios.get("http://localhost:8080/api/")
  .then((response)=> {
    const allRecipes = response.data.recipe;
      getRecipe(allRecipes);
  })
  .catch(error => console.error(`Error:${error}`));
}
useEffect(() => {
 getTheRecipe();
  
}, []);


    return(
        <>
        <TheNav/>
  <Content>
 <TheLayout
 reci={recipe}/>
  </Content>
  {/* <Footer>Footer</Footer> */}
        </>
    )
}


const TheLayout = (props)=> {
  console.log(props.reci)
    return (
        <>
        </>
    )
}
export default Find;