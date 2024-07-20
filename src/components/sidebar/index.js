import React, { useState } from 'react';
import {
   AppstoreOutlined,
   CalendarOutlined,
   MessageOutlined,
   SettingOutlined,
   PieChartOutlined,
   ProjectOutlined,
   StarOutlined,
   InboxOutlined,
   BarChartOutlined,
   MenuUnfoldOutlined,
   MenuFoldOutlined,
} from '@ant-design/icons';
import { Menu, Layout, Row, Col,Badge } from 'antd';
import './sidebar.css';
import logo from "../../assest/images/logo.png"

const { Sider } = Layout;

const items = [
   {
      key: '1',
      icon: <PieChartOutlined />,
      label: 'Dashboard',
   },
   {
      key: '2',
      icon: <AppstoreOutlined />,
      label: 'Feed',
   },
   {
      key: 'sub1',
      label: 'Projects',
      icon: <ProjectOutlined />,
      children: [
         {
            key: '3',
            label: 'Project 1',
         },
         {
            key: '4',
            label: 'Project 2',
         },
      ],
   },
   {
      key: '5',
      icon: <StarOutlined />,
      label: 'Workspace',
   },
   {
      key: '6',
      icon: <MessageOutlined />,
      label: (
         <Row justify="space-between" align="middle">
            <Col>Chat</Col>
            <Col>
               <Badge count={4} offset={[0, 0]} style={{ backgroundColor: '#EB6A9B' }}/>
            </Col>
         </Row>
      ),
   },
   {
      key: '7',
      icon: <CalendarOutlined />,
      label: 'Calendar',
   },
   {
      key: '8',
      icon: <InboxOutlined />,
      label: 'Inbox',
   },
   {
      key: '9',
      icon: <BarChartOutlined />,
      label: 'Reports',
   },
];

const Sidebar = () => {
   const [collapsed, setCollapsed] = useState(false);
   const [selectedKey, setSelectedKey] = useState('1'); // State for menu selection

   const toggleSidebar = () => {
      // setSelectedKey(11);
      setCollapsed(!collapsed);
   };

   const handleMenuClick = (e) => {
      if(selectedKey === 11){
         setSelectedKey(10);
      }else{
         setSelectedKey(e.key);
      }
      
   };

   return (
      <Layout style={{width:collapsed ? "80px" :"284px" }}>
         <Sider collapsible collapsed={collapsed} trigger={null} className={`${collapsed ? 'sidebarwidth' : 'sidebarnowidth'} sidebar`}>
            <div className="sidebar">
               <div className='logo-manage'>
                  <img src={logo} alt="" />
                  <h2 style={{display: collapsed ? 'none' :'block'}}>TEC-PMS</h2>
               </div>
               <div className='page-header' style={{justifyContent:collapsed ? 'center' : 'start'}}>
                  <p >PAGES</p>
               </div>
               <div>
                  <Menu
                     selectedKeys={[selectedKey]}
                     defaultOpenKeys={['sub1']}
                     mode='inline'
                     theme='light'
                     items={items}
                     className="menu"
                     onClick={handleMenuClick}
                  />
               </div>
            </div>
            <div>
               <Menu mode='inline' theme='light' onClick={handleMenuClick} selectedKeys={[selectedKey]}>
                  <Menu.Item key="10" icon={<SettingOutlined />}>
                     <Row className="menu-item-content">
                        <Col flex="auto">
                           <span>Help & Support</span>
                        </Col>
                        <Col>
                           {collapsed ? (
                              <MenuUnfoldOutlined onClick={toggleSidebar} />
                           ) : (
                              <MenuFoldOutlined onClick={toggleSidebar} />
                           )}
                        </Col>
                     </Row>
                  </Menu.Item>
                  {collapsed && (
                     <Menu.Item key="11" icon={<MenuUnfoldOutlined/>}  onClick={toggleSidebar} >
                     </Menu.Item>
                  )}
               </Menu>
            </div>
         </Sider>
      </Layout>
   );
};

export default Sidebar;
