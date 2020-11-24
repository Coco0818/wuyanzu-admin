import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./index.css";
import { Link, Route } from "react-router-dom";
// 跳转到首页
import Home from "@pages/Companys";

export default class index extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };

    return (
      <div className="login-container">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <div className="title-container">
            <h3 data-v-37dfd6fc="" className="title">
              拉钩后台管理系统
            </h3>
          </div>
          <Form.Item
            name="username el-form-item is-success is-required"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="账号"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              <Link to="/companys">登录</Link>
            </Button>
          </Form.Item>
        </Form>
        {/* 管理系统页面 */}
        <Route path="/companys" component={Home}></Route>
      </div>
    );
  }
}
