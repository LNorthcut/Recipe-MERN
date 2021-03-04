import { Input, Space } from 'antd';
import { Card, Col, Row } from 'antd';
import { useState } from 'react';
import UTILS from '../../utils';
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import "./style.css"
import CContainer from '../../components/ContentContainer';
import TheNav from '../../components/NavBar';
// const onSearch = value => console.log(value);

const { Header, Footer, Sider, Content } = Layout;

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">Breakfast</Menu.Item>
      <Menu.Item key="2">Brunch</Menu.Item>
      <Menu.Item key="3">Lunch</Menu.Item>
      <Menu.Item key="3">Snack</Menu.Item>
      <Menu.Item key="3">Dinner</Menu.Item>
    </Menu>
  );
const { Search } = Input;
const TheLayout = ()=> {
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
         <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me, Click menu item <DownOutlined />
    </a>
  </Dropdown>
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



function Find (){
    return(
        <>
        <TheNav/>
  <Content>
  <CContainer
    content={<TheLayout/>}
    />
  </Content>
  {/* <Footer>Footer</Footer> */}
        </>
    )
}

export default Find;