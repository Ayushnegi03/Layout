'use client';
import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import {  Layout, Menu, theme } from 'antd';
const {  Content, Sider } = Layout;
// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
            heigth:"100vh",
             // Completely hide the Sider on smaller screens
          }}
          collapsible
            breakpoint="md" // Breakpoint for responsive collapse (e.g., md = 768px)
            collapsedWidth="0"
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '70%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '24px 24px 24px',
          }}
        >
         
          <Content
            style={{
              padding: 8,
              margin: 0,
              minHeight: 577,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
             <h2 style={{ marginBottom: 16 }}>Welcome to the Dashboard</h2>
              <p style={{ marginBottom: 24 }}>
                     This is an example of how content can fill the space inside this box. Below, you can see a list of features available in this section:
              </p>
              <ul style={{ paddingLeft: 20 }}>
              <li style={{ marginBottom: 8 }}>View recent activity</li>
              <li style={{ marginBottom: 8 }}>Access user settings</li>
              <li style={{ marginBottom: 8 }}>Manage notifications</li>
              <li style={{ marginBottom: 8 }}>Generate reports</li>
              </ul>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;