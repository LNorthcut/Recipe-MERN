import { Input, Space } from 'antd';
// import { Card, Col, Row } from 'antd';
import { useState, useEffect } from 'react';
import UTILS from '../../utils';
// import { Menu, Dropdown, message } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import "./style.css"
// import CContainer from '../../components/ContentContainer';
import TheNav from '../../components/NavBar';
// const onSearch = value => console.log(value);
import axios from 'axios';
import DataTable from './table';
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

// The actual component
const Find = ()=>{
const [isLoading, isNotLoading ] = useState (true);
const [recipes, getRecipes] = useState(' ');
const getTheRecipe = () => {

  const header = {
    'Content-Type': 'text/plain'
  }
  axios.get("http://localhost:8080/api", {header})
  .then((response)=> {
    const allRecipes = response.data;
      getRecipes( allRecipes);
     
  })
  .catch(error => console.error(`Error:${error}`));
}
useEffect(() => {
 getTheRecipe();
  
}, []);
    return(
        <>
        <TheNav/>
      
        </>
    )
}


export default Find;