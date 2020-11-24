import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  CoffeeOutlined,
  UploadOutlined,
  TeamOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import "./index.css";

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

export default class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed: !this.state.collapsed });
  };
  xxx = () => {
    this.props.history.push("/positions");
  };
  render() {
    const { collapsed } = this.state;
    const { xxx } = this;

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsed={collapsed}>
          <div className="logo"> </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              首页
            </Menu.Item>
            <SubMenu key="sub1" icon={<TeamOutlined />} title="权限管理">
              <Menu.Item key="6">用户管理</Menu.Item>
              <Menu.Item key="8">角色管理</Menu.Item>
              <Menu.Item key="12">菜单管理</Menu.Item>
            </SubMenu>
            <Menu.Item key="4" icon={<HomeOutlined />}>
              公司管理
            </Menu.Item>
            <Menu.Item key="3" icon={<CoffeeOutlined />} onClick={xxx}>
              职位管理
            </Menu.Item>
            <Menu.Item key="5" icon={<UploadOutlined />}>
              个人管理
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.onCollapse,
              }
            )}
            <Breadcrumb className="breadcrumb">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
        </Layout>
      </Layout>
    );
  }
}
