import React, { Component } from 'react'
import { Layout, Breadcrumb, Menu, Button, Dropdown } from 'antd'

import { Route, Switch } from 'react-router-dom'
import { changeLanguageSync } from '../../store/actions/language'

import { connect } from 'react-redux'

import {
  UserOutlined,
  CoffeeOutlined,
  HomeOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  GlobalOutlined,
  LogoutOutlined,
} from '@ant-design/icons'

import { Link } from 'react-router-dom'

// // 右边导航栏
// import SliderCustom from '@comps/SliderCustom'

// 头部
// import HeaderCustom from '@comps/HeaderCustom'

// 图片
import logoUrl from '@assets/images/logo.png'
import headPic from '@assets/images/pic.jpg'

// 路由
import Dashboard from '../Dashboard'
import Positions from '../Positions'
import CenterPerson from '../CenterPerson'
import Companys from '../Companys'
import Permissions from '../Permissions'

import './index.css'
import { Content } from 'antd/lib/layout/layout'

const { Sider, Header } = Layout

class Admin extends Component {
  state = {
    collapsed: false,
    username: '',
    permissions: false, //权限
  }

  componentDidMount() {
    const username = localStorage.getItem('USERNAME')
    const quanxian = localStorage.getItem('PERMISSIONS')
    const permissions = quanxian.split(',').length

    this.setState({
      username,
      permissions,
    })
  }

  // 选择语言
  clickLang = (lang) => {
    return () => {
      this.props.changeLanguageSync(lang)
    }
  }
  // 侧边导航栏显示隐藏
  onCollapse = () => {
    // console.log(collapsed)
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  logOut = () => {
    localStorage.removeItem('USERNAME')
    this.props.history.push('/login')
  }

  render() {
    // 个人中心

    const menu = (
      <Menu onClick={this.logOut}>
        <Menu.Item key="1">
          <LogoutOutlined />
          退出登录
        </Menu.Item>
      </Menu>
    )
    // 语言选择
    const langMenu = (
      <Menu
        // selectedKeys={[this.props.language]}
        selectable // Dropdown 下的 Menu 默认不可选中。如果需要菜单可选中，可以指定 <Menu selectable>
      >
        <Menu.Item key="zh">
          <Button
            style={this.props.language === 'zh' ? { color: 'red' } : {}}
            type="link"
            onClick={this.clickLang('zh')}
          >
            中文
          </Button>
        </Menu.Item>
        <Menu.Item key="en">
          <Button
            type="link"
            onClick={this.clickLang('en')}
            style={this.props.language === 'en' ? { color: 'red' } : {}}
          >
            English
          </Button>
        </Menu.Item>
      </Menu>
    )

    const { collapsed, username, permissions } = this.state

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsed={collapsed}>
          <div className="logo">
            <img className="head-logo" src={logoUrl} alt="拉钩后台管理系统" />
          </div>
          {permissions === 3 ? (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['/admin']}>
              <Menu.Item key="/admin" icon={<HomeOutlined />}>
                <Link to="/admin">首页</Link>
              </Menu.Item>
              <Menu.Item key="/admin/permissions" icon={<HomeOutlined />}>
                <Link to="/admin/permissions">权限管理</Link>
              </Menu.Item>
              <Menu.Item key="/admin/companys" icon={<HomeOutlined />}>
                <Link to="/admin/companys">公司管理</Link>
              </Menu.Item>
              <Menu.Item key="/admin/positions" icon={<CoffeeOutlined />}>
                <Link to="/admin/positions">职位管理</Link>
              </Menu.Item>
              <Menu.Item key="/admin/centerPerson" icon={<UserOutlined />}>
                <Link to="/admin/centerPerson">个人中心</Link>
              </Menu.Item>
            </Menu>
          ) : (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['/admin']}>
              <Menu.Item key="/admin" icon={<HomeOutlined />}>
                <Link to="/admin">首页</Link>
              </Menu.Item>
              <Menu.Item key="/admin/positions" icon={<HomeOutlined />}>
                <Link to="/admin/companys">公司管理</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<CoffeeOutlined />}>
                <Link to="/admin/positions">职位管理</Link>
              </Menu.Item>
            </Menu>
          )}
          {/* <Menu theme="dark" mode="inline">
            <Menu.Item key="/admin" icon={<HomeOutlined />}>
              <Link to="/admin">首页</Link>
            </Menu.Item>
            <Menu.Item key="/admin/permissions" icon={<HomeOutlined />}>
              <Link to="/admin/permissions">权限管理</Link>
            </Menu.Item>
            <Menu.Item key="/admin/positions" icon={<HomeOutlined />}>
              <Link to="/admin/companys">公司管理</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<CoffeeOutlined />}>
              <Link to="/admin/positions">职位管理</Link>
            </Menu.Item>
            <Menu.Item key="/admin/centerPerson" icon={<UserOutlined />}>
              <Link to="/admin/centerPerson">个人中心</Link>
            </Menu.Item>
          </Menu> */}
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: this.onCollapse,
              }
            )}

            <div className="right-header">
              <img className="head-pic" src={headPic} alt="" />
              <Dropdown overlay={menu}>
                <span className="username">{username}</span>
              </Dropdown>
              <span className="layout-header-lang">
                <Dropdown overlay={langMenu}>
                  <GlobalOutlined />
                </Dropdown>
              </span>
            </div>
          </Header>

          <Content>
            <div className="layout-nav">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link to="/admin">首页</Link>
                </Breadcrumb.Item>
                {/* 一级菜单 */}
              </Breadcrumb>
            </div>
            {/* 内容区 */}
            <div className="layout-content">
              <Switch>
                <Route exact path={'/admin'} component={Dashboard} />
                <Route
                  exact
                  path={'/admin/permissions'}
                  component={Permissions}
                />
                <Route exact path={'/admin/positions'} component={Positions} />
                <Route exact path={'/admin/Companys'} component={Companys} />
                <Route
                  exact
                  path={'/admin/centerPerson'}
                  component={CenterPerson}
                />
                Permissions
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default connect(null, {
  changeLanguageSync,
})(Admin)
