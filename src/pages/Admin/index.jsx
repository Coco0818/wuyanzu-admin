import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd'

import { Route, Switch } from 'react-router-dom'

import { getCookie, setCookie } from '../../utils/cookies'

// 右边导航栏
import SliderCustom from '@comps/SliderCustom'

// 头部
import HeaderCustom from '@comps/HeaderCustom'

// 路由
import Dashboard from '../Dashboard'
import Positions from '../Positions'

// 引入图片
import './index.css'
import { Content } from 'antd/lib/layout/layout'

export default class App extends Component {
  state = {
    collapsed: true,
  }

  // 选择语言
  clickLang = (lang) => {
    return () => {
      this.props.changeLanguageSync(lang)
    }
  }

  onCollapse = () => {
    // console.log(collapsed)
    this.setState(
      {
        collapsed: !this.state.collapsed,
      },
      function () {
        setCookie('SHOW_SLIDER', this.state.collapsed)
      }
    )
  }

  componentDidMount() {
    //保存Sider收缩
    if (getCookie('SHOW_SLIDER') === null) {
      setCookie('SHOW_SLIDER', false)
    }
  }

  render() {
    // 个人中心

    const { collapsed } = this.state

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SliderCustom collapsed={collapsed} />
        <Layout className="site-layout">
          <HeaderCustom
            collapsed={collapsed}
            onCollapse={this.onCollapse}
            clickLang={this.clickLang}
          />

          <Content>
            <div className="layout-nav">
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                {/* 一级菜单 */}
                <Breadcrumb.Item>个人中心</Breadcrumb.Item>
                {/* 二级菜单 */}
                <Breadcrumb.Item>职位管理</Breadcrumb.Item>
              </Breadcrumb>
              <h3>公司管理</h3>
            </div>
            {/* 内容区 */}
            <div className="layout-content">
              <Switch>
                <Route exact path={'/admin'} component={Dashboard} />
                <Route exact path={'/positions'} component={Positions} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
