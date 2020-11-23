import React, { Component } from 'react'
import { Layout, Dropdown, Menu, Button } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  GlobalOutlined,
} from '@ant-design/icons'

// import { connect } from 'react-redux'
// import { changeShowSilder } from '../../store/actions/showSlider'

import headPic from '@assets/images/pic.jpg'

const { Header } = Layout

export default class HeaderCustom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: props.collapsed,
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   //console.log(nextProps);
  //   this.onCollapse(nextProps.collapsed)
  // }

  onCollapse = () => {
    const { collapsed } = this.state
    // console.log(this.props)
    this.setState({
      collapsed: !collapsed,
    })
    // store.dispatch({ type: 'SHOW_SLIDER' })
    this.props.changeShowSilder(collapsed)
  }

  clickLang = (lang) => {
    return () => {
      this.props.changeLanguageSync(lang)
    }
  }
  render() {
    const { collapsed } = this.props
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            个人中心
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            退出登录
          </a>
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

    return (
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
            <span className="username">用户名</span>
          </Dropdown>
          <span className="layout-header-lang">
            <Dropdown overlay={langMenu}>
              <GlobalOutlined />
            </Dropdown>
          </span>
        </div>
      </Header>
    )
  }
}

// export default connect(
//   (state) => {
//     // collapsed: state.collapsed
//   },
//   {
//     changeShowSilder,
//   }
// )(HeaderCustom)
