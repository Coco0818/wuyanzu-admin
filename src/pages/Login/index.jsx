import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { reqLogin } from '@api/users'

import './index.css'

export default class index extends Component {
  state = {
    username: 'admin',
    password: 'admin',
  }

  getUsername = (e) => {
    this.setState({
      username: e.target.value,
    })
  }
  getPassword = (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  login = () => {
    const { username, password } = this.state
    reqLogin(username, password)
      .then((res) => {
        console.log(res)
        this.props.history.push('/')
      })
      .catch((err) => {
        alert('用户名或密码错误')
      })
  }

  render() {
    const { username, password } = this.state
    return (
      <div className="login-container">
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
              onChange={this.getUsername}
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
              onChange={this.getPassword}
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
      </div>
    )
  }
}
