import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
// 小图标
import {
  UserOutlined,
  CoffeeOutlined,
  TeamOutlined,
  HomeOutlined,
} from '@ant-design/icons'

import { Link } from 'react-router-dom'

// 图片
import logoUrl from '@assets/images/logo.png'

const { Sider } = Layout
const { SubMenu } = Menu

export default class SliderCustom extends Component {
  constructor(props) {
    super(props)
    const { collapsed } = props
    this.state = {
      collapsed: collapsed,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.onCollapse(nextProps.collapsed)
  }

  onCollapse = (collapsed) => {
    this.setState({
      collapsed,
    })
  }

  render() {
    const { collapsed } = this.state
    return (
      <Sider collapsed={collapsed}>
        <div className="logo">
          <img className="head-logo" src={logoUrl} alt="拉钩后台管理系统" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            首页
          </Menu.Item>
          <SubMenu key="sub1" icon={<TeamOutlined />} title="权限管理">
            <Menu.Item key="6">用户管理</Menu.Item>
            <Menu.Item key="8">角色管理</Menu.Item>
            <Menu.Item key="12">菜单管理</Menu.Item>
          </SubMenu>
          <Menu.Item key="4" icon={<HomeOutlined />}>
            <Link to="positions">公司管理</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<CoffeeOutlined />}>
            职位管理
          </Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}>
            个人中心
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
