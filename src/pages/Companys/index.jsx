import React, { Component } from 'react'
import './index.css'
import {
  reqCompany,
  removeCompany,
  addCompany,
  updateCompany,
} from '@api/users'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import {
  Table,
  Button,
  Image,
  Popconfirm,
  message,
  Modal,
  Form,
  Input,
} from 'antd'

const { Column } = Table

export default class index extends Component {
  state = {
    top: 'topLeft',
    bottom: 'bottomRight',
    companyArr: [], // 所有公司数组
    visible: false,
    comName: '', // 公司名称
    advantage: '', // 公司简介
    indusStage: '',
    id: '',
    addOrUpdate: '',
  }

  componentDidMount() {
    this.getAllCompanys()
  }

  // 得到所有公司信息
  async getAllCompanys() {
    // 把请求到的数据赋给result
    const result = await reqCompany()
    // 设置公司数组的值等于result
    this.setState({
      companyArr: result,
    })
  }

  // 修改提示
  onfirmOne = (e) => {
    message.success('修改成功!')
  }

  // 修改提示
  cancelOne = (e) => {
    message.error('修改失败!')
  }

  // 删除提示
  confirmTwo = (id) => {
    return () => {
      // 删除功能
      removeCompany(id)
        .then((req) => {
          message.success('删除成功!')
          this.getAllCompanys()
        })
        .catch((err) => {
          message.error('删除失败')
        })
    }
  }

  // 删除提示
  cancelTwo = (e) => {
    message.error('删除失败!')
  }

  showModal = () => {
    this.setState({
      visible: true,
      addOrUpdate: 'add',
    })
  }

  showModalTwo = (id) => {
    return () => {
      this.setState({
        visible: true,
        addOrUpdate: 'update',
        id,
      })
    }
  }

  // 添加
  handleChangeTwo = (type) => {
    return (e) => {
      this.setState({
        [type]: e.target.value,
      })
    }
  }

  handleOk = () => {
    const { comName, advantage, indusStage, id, addOrUpdate } = this.state
    if (addOrUpdate === 'add') {
      addCompany({
        comName,
        advantage,
        indusStage,
        ImgUrl:
          'https://www.lgstatic.com/thumbnail_200x200/i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png',
        commentNum: 1,
        positionNum: 11,
        perNum: '22%',
      })
        .then(() => {
          message.success('添加成功')
        })
        .catch(() => {
          message.error('添加失败')
        })
    } else {
      updateCompany({
        comName,
        advantage,
        indusStage,
        ImgUrl:
          'https://www.lgstatic.com/thumbnail_200x200/i/image/M00/21/3E/CgpFT1kVdzeAJNbUAABJB7x9sm8374.png',
        commentNum: 1,
        positionNum: 11,
        perNum: '22%',
        id,
      })
        .then(() => {
          message.success('修改成功')
        })
        .catch(() => {
          message.error('修改失败')
        })
    }

    this.setState({
      visible: false,
    })
    this.getAllCompanys()
  }

  handleCancel = (e) => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  render() {
    const { size } = this.state
    const { companyArr } = this.state

    return (
      <div>
        {/* 按钮 */}
        <Button
          type="primary"
          size={size}
          className="icons-list Add-btn"
          onClick={this.showModal}
        >
          <PlusOutlined />
          添加
        </Button>
        <Modal
          title="操作"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form.Item label="公司名称" name="username" key="comName">
            <Input onChange={this.handleChangeTwo('comName')} />
          </Form.Item>
          <Form.Item label="公司简介" name="companyIntroce" key="advantage">
            <Input onChange={this.handleChangeTwo('advantage')} />
          </Form.Item>
          <Form.Item label="规模" name="scale" key="indusStage">
            <Input onChange={this.handleChangeTwo('indusStage')} />
          </Form.Item>
        </Modal>
        {/* 表格 */}
        <Table dataSource={companyArr} bordered className="Add-table">
          {/* 列 */}
          <Column
            title="序号"
            dataIndex="index"
            key="index"
            render={(a, b, index) => index + 1}
          ></Column>
          <Column title="公司名称" dataIndex="comName" key="comName" />
          <Column
            title="LOGO"
            dataIndex="ImgUrl"
            key="ImgUrl"
            render={(a, b, index) => <Image src={a} width={50} />}
          />
          <Column title="公司简介" dataIndex="advantage" key="advantage" />
          <Column title="规模" dataIndex="indusStage" key="indusStage" />
          <Column
            title="操作"
            dataIndex="tags"
            key="tags"
            render={(a, b, index) => (
              <>
                <Button
                  type="warning"
                  className="icons-list tagBtn one-btn"
                  onClick={this.showModalTwo(b.id)}
                >
                  <EditOutlined />
                  修改
                </Button>

                <Popconfirm
                  title="你确定要删除吗?"
                  onConfirm={this.confirmTwo(b.id)}
                  onCancel={this.cancelTwo}
                  okText="确定"
                  cancelText="取消"
                >
                  <Button type="primary" className="icons-list two-btn">
                    <DeleteOutlined />
                    删除
                  </Button>
                </Popconfirm>
              </>
            )}
          />
        </Table>
      </div>
    )
  }
}
