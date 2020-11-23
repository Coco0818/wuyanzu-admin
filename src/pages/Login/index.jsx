import React, { Component } from 'react'
import { Form, Input, Button, Tabs, notification } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { reqLogin, reqRegister } from '@api/users'

import './index.css'

const { TabPane } = Tabs

export default class index extends Component {
  state = {
    username: 'admin',
    password: 'admin',
    registerName: '', // 注册账号
    registerPwd: '', // 注册密码
  }

  // 登录
  // getUsername = (e) => {
  //   this.setState({
  //     username: e.target.value,
  //   })
  // }
  // getPassword = (e) => {
  //   this.setState({
  //     password: e.target.value,
  //   })
  // }

  getUser = (key) => {
    return (e) => {
      this.setState({
        [key]: e.target.value,
      })
    }
  }

  login = () => {
    const { username, password } = this.state
    reqLogin(username, password)
      .then((res) => {
        localStorage.setItem('USERNAME', username)
        localStorage.setItem('PERMISSIONS', res.authority)

        this.props.history.push('/')
      })
      .catch((err) => {
        alert('用户名或密码错误')
      })
  }

  // 注册

  register = () => {
    const { registerName, registerPwd } = this.state
    reqRegister(registerName, registerPwd)
      .then((res) => {
        notification.success({
          message: '注册成功',
        })
      })
      .catch((err) => {
        notification.error({
          message: '注册失败，请重新输入',
        })
      })
  }

  render() {
    const { username, password, registerName, registerPwd } = this.state
    return (
      <div className="login-container">
        <Tabs
          defaultActiveKey="1"
          centered
          size="large"
          style={{ marginTop: '-150px' }}
        >
          <TabPane tab="登录" key="1">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={this.login}
            >
              <div className="title-container">
                <h3 data-v-37dfd6fc="" className="title">
                  拉钩后台管理系统
                </h3>
              </div>
              <Form.Item
                name="username el-form-item is-success is-required"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your Username!',
                //   },
                // ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="账号"
                  defaultValue={username}
                  value={username}
                  onChange={this.getUser('username')}
                />
              </Form.Item>
              <Form.Item
                name="password"
                // rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                  defaultValue={password}
                  value={password}
                  onChange={this.getUser('password')}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="注册" key="2">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={this.register}
            >
              <div className="title-container">
                <h3 data-v-37dfd6fc="" className="title">
                  拉钩后台管理系统
                </h3>
              </div>
              <Form.Item
                name="username el-form-item is-success is-required"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your Username!',
                //   },
                // ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="账号"
                  value={registerName}
                  onChange={this.getUser('registerName')}
                />
              </Form.Item>
              <Form.Item
                name="password"
                // rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                  value={registerPwd}
                  onChange={this.getUser('registerPwd')}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  注册
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
