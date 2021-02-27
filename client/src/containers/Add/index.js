import { Input, Space } from 'antd';
import { Card, Col, Row } from 'antd';
import { useState } from 'react';
import UTILS from '../../utils';


import CContainer from '../../components/ContentContainer';
import TheNav from '../../components/NavBar';
// const onSearch = value => console.log(value);
const { Search } = Input;
const Layout = ()=> {
  const [recipe, setRecipe] = useState([]);
  const [q, setQ] = useState("");
  
 const handleSubmit = id => { 
      const arecipe = recipe.find(recipe => recipe.id === id);
      UTILS.addRecipe({
          name: arecipe.name,
          ingredients: arecipe.ingredients
      }).then(()=> console.log('working'))
  }
    return (
        <>
         <Col span={12} offset={6} >
         <Search placeholder="input search text" onSearch={handleSubmit} enterButton />
          <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
  </Col>
        </>
    )
}

function Add (){
    return(
        <>
        <TheNav/>
  <CContainer
    content={<Layout/>}
    />
        </>
    )
}

export default Add;