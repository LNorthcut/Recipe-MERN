import { Menu } from 'antd';
import { MailOutlined} from '@ant-design/icons';
import { useState } from 'react';
import {Link} from 'react-router-dom'
const { SubMenu } = Menu;

function TheNav(props){
    const [current, setCurrent] =useState("mail");
   const handleClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key)
      };
      
    return(
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" >
         {props.search}
        </Menu.Item>
        <Menu.Item key="app" to="/add" >
      {props.add}
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<MailOutlined />} title="More">
          <Menu.ItemGroup >
            <Menu.Item key="setting:1">Contact The Developer</Menu.Item>
            
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          {props.login}
        </Menu.Item>
        <Menu.Item key="alipay">
         <Link to="/"> Home </Link>
        </Menu.Item>
      </Menu>
    )
}
export default TheNav;


