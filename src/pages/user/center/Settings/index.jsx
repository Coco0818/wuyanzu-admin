import React, { Component } from "react";
import {
  Tabs,
  Row,
  Col,
  Form,
  Input,
  Button,
  Upload,
  message,
  Avatar,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";


import "./index.css";

const { TabPane } = Tabs;


class Settings extends Component {
  onFinish = () => {};

  render() {


    const uploadProps = {
      name: "file",
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      headers: {
        authorization: "authorization-text",
      },
      accept: "image/*",
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    return (
      <div className="settings">
        {/* 整体样式ant Tabs标签页 */}
        <Tabs tabPosition="left">
          <TabPane tab="基本设置" key="1" className="tabPhone">
            <h3>基本设置</h3>
            {/* 栅格布局 */}
            <Row>
              <Col span={6}>
                
                <Form
                  name="nest-messages"
                  onFinish={this.onFinish}
                  colon={false}
                  // initialValues={{nickName}}
                  layout="vertical"
                >
                  <Form.Item name="phone" label="手机号">
                    <Input placeholder="手机号" />
                  </Form.Item>
                  <Form.Item name="nickName" label="昵称">
                    <Input placeholder="昵称" />
                  </Form.Item>
                  <Form.Item name="introduction" label="个人简介">
                    <Input.TextArea placeholder="个人简介" rows={4} />
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                      更新基本信息
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
              <Col span={6}>
                <p className="settings-upload-title">头像</p>
                <div className="settings-upload">
                  <Avatar size={120} src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" />
                  <Upload {...uploadProps}>
                    <Button>
                      <UploadOutlined /> 更换头像
                    </Button>
                  </Upload>
                </div>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Settings;
