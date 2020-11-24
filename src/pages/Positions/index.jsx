import React, { Component } from "react";
import {
  Card,
  Table,
  Tag,
  Button,
  Modal,
  Input,
  Form,
  Select,
  Image,
  message,
} from "antd";
import {
  reqPositions,
  reqModifyPosition,
  reqAddOrUpdatePosition,
} from "@api/positions";
import { FormOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

import { reqRemovePosition } from "@api/positions";
const { Option } = Select;
const { Column } = Table;
export default class Positions extends Component {
  state = {
    positions: [],
    title: "",
    m1Visible: false,
    m2Visible: false,
    _id: "",
    Education: "",
    FinancingStage: "",
    Salary: "",
    StaffSize: "",
    city: "",
    companyName: "",
    imgUrl: "",
    industrySector: "",
    jobTemptation: "",
    positionName: "",
    postTag: [],
    workingExperience: "",
    addOrUpdate: "",
  };
  async componentDidMount() {
    this.getPositions();
  }
  getPositions = async () => {
    const result = await reqPositions();
    this.setState({
      positions: result,
    });
  };

  handleOk = (type) => {
    return async () => {
      const {
        Education,
        FinancingStage,
        Salary,
        StaffSize,
        city,
        companyName,
        imgUrl,
        industrySector,
        jobTemptation,
        positionName,
        postTag,
        workingExperience,
        _id,
      } = this.state;
      const data = {
        Education,
        FinancingStage,
        Salary,
        StaffSize,
        city,
        companyName,
        imgUrl,
        industrySector,
        jobTemptation,
        positionName,
        postTag,
        workingExperience,
        _id,
      };
      switch (type) {
        case "add":
          const result1 = await reqAddOrUpdatePosition("add", data);
          this.setState({
            m1Visible: false,
          });
          message.success("添加职位成功");
          this.getPositions();
          return;
        case "update":
          this.setState({
            m1Visible: false,
          });
          const result2 = await reqAddOrUpdatePosition("update", data);
          message.success("修改职位成功");
          this.getPositions();
          return;
        case "remove":
          try {
            const result = await reqRemovePosition(this.state._id);
            this.setState({
              m2Visible: false,
            });
            message.success("删除职位成功");
            this.getPositions();
            return;
          } catch (err) {
            console.log(err);
          }
      }
      // switch()
    };
  };

  handleCancel = (type) => {
    return (e) => {
      switch (type) {
        case "add":
          this.setState({
            m1Visible: false,
          });
          return;
        case "update":
          this.setState({
            m1Visible: false,
          });
          return;
        case "remove":
          this.setState({
            _id: "",
            m2Visible: false,
          });
          return;
      }
    };
  };

  onFinish = (values) => {
  };
  onFinishFailed = (errorInfo) => {
  };
  handleChange = (type) => {
    return (value) => {
      this.setState({
        [type]: value,
      });
    };
  };
  removePosition = (id) => {
    return async () => {
      this.setState({
        _id: id,
        m2Visible: true,
      });
    };
  };

  addOrModifyPosition = (type, _id) => {
    return async () => {
      switch (type) {
        case "Add":
          this.setState({
            m1Visible: true,
            title: "添加",
            addOrUpdate: "add",
            Education: "",
            FinancingStage: "",
            Salary: "",
            StaffSize: "",
            city: "",
            imgUrl: "",
            companyName: "",
            industrySector: "",
            jobTemptation: "",
            positionName: "",
            postTag: [],
            workingExperience: "",
          });
          return;
        case "Modify":
          const result = await reqModifyPosition(_id);
          this.setState({
            Education: result[0].Education,
            FinancingStage: result[0].FinancingStage,
            Salary: result[0].Salary,
            StaffSize: result[0].StaffSize,
            city: result[0].city,
            companyName: result[0].companyName,
            imgUrl: result[0].imgUrl,
            industrySector: result[0].industrySector,
            jobTemptation: result[0].jobTemptation,
            positionName: result[0].positionName,
            postTag: result[0].postTag,
            workingExperience: result[0].workingExperience,
            m1Visible: true,
            title: "修改",
            addOrUpdate: "update",
            _id,
          });
          return;
      }
    };
  };
  changeState = (type) => {
    return (e) => {
      if (type === "postTag") {
        const postTag = e.target.value.split("、");
        this.setState({
          postTag,
        });
        return;
      }
      this.setState({
        [type]: e.target.value,
      });
    };
  };
  render() {
    const { positions, title } = this.state;
    const {
      addOrModifyPosition,
      onFinish,
      onFinishFailed,
      handleChange,
      removePosition,
      changeState,
    } = this;
    return (
      <>
        <Card key="1">
          <Button
            icon={<PlusOutlined />}
            style={{
              // backgroundColor: "#00b38a",
              color: "#fff",
              width: "80px",
              height: "40px",
            }}
            onClick={addOrModifyPosition("Add")}
            type="primary"
          >
            添加
          </Button>
        </Card>

        <Card key="2">
          <Table dataSource={positions} key="1" scroll={{ x: 500 }} sticky>
            <Column
              title="序号"
              dataIndex="index"
              key="index"
              render={(a, b, index) => index + 1}
              width={100}
              align="center"
              fixed="left"
            ></Column>
            <Column
              title="职位名"
              dataIndex="positionName"
              key="positionName"
              width={150}
            ></Column>
            <Column
              title="公司"
              dataIndex="companyName"
              key="companyName"
              width={150}
            ></Column>
            <Column
              title="公司logo"
              dataIndex="imgUrl"
              key="imgUrl"
              render={(a, b, index) => <Image width={50} src={a} />}
              width={100}
            ></Column>
            <Column
              title="职位诱惑"
              dataIndex="jobTemptation"
              key="jobTemptation"
              width={150}
            ></Column>
            <Column
              title="职位类型"
              dataIndex="industrySector"
              key="industrySector"
              width={100}
            ></Column>
            <Column
              title="薪资区间"
              dataIndex="Salary"
              key="Salary"
              width={100}
            ></Column>
            <Column
              title="公司规模"
              dataIndex="StaffSize"
              key="StaffSize"
              width={150}
            ></Column>
            <Column
              title="学历要求"
              dataIndex="Education"
              key="Education"
              width={100}
            ></Column>
            <Column
              title="工作地点"
              dataIndex="city"
              key="city"
              width={150}
            ></Column>
            <Column
              title="职位小Tag"
              dataIndex="postTag"
              key="postTag"
              width={300}
              render={(postTag) => (
                <>
                  {postTag.map((tag) => (
                    <Tag color="#00b38a" key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </>
              )}
            ></Column>
            <Column
              title="操作"
              dataIndex="operate"
              key="operate"
              fixed="right"
              width={200}
              render={(a, b, index) => {
                return (
                  <>
                    <Button
                      icon={<FormOutlined />}
                      style={{
                        backgroundColor: "#00b38a",
                        color: "#fff",
                        width: "40px",
                      }}
                      onClick={addOrModifyPosition("Modify", b._id)}
                    ></Button>
                    <Button
                      icon={<DeleteOutlined />}
                      style={{
                        backgroundColor: "red",
                        color: "#fff",
                        width: "40px",
                      }}
                      onClick={removePosition(b._id)}
                    ></Button>
                  </>
                );
              }}
            ></Column>
          </Table>
        </Card>
        {this.state.m1Visible && (
          <Modal
            title={title + "职位"}
            visible={this.state.m1Visible}
            onOk={this.handleOk(this.state.addOrUpdate)}
            onCancel={this.handleCancel(this.state.addOrUpdate)}
            cancelText="取消"
            okText={title}
            key="3"
          >
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
              <Form.Item
                label="职位名"
                name="positionName"
                initialValue={this.state.positionName}
                key="positionName"
              >
                <Input
                  value={this.state.positionName}
                  onChange={changeState("positionName")}
                />
              </Form.Item>
              <Form.Item
                label="公司名"
                name="companyName"
                key="companyName"
                initialValue={this.state.companyName}
              >
                <Input
                  value={this.state.companyName}
                  onChange={changeState("companyName")}
                />
              </Form.Item>
              <Form.Item
                label="工作地点"
                name="city"
                key="city"
                initialValue={this.state.city}
              >
                <Input
                  value={this.state.city}
                  // defaultValue={this.state.city}
                  onChange={changeState("city")}
                />
              </Form.Item>
              <Form.Item
                label="公司规模"
                name="StaffSize"
                key="StaffSize"
                initialValue={this.state.StaffSize}
              >
                <Select
                  value={this.state.StaffSize}
                  onChange={handleChange("StaffSize")}
                >
                  <Option value="0-20">0-20</Option>
                  <Option value="20-100">20-100</Option>
                  <Option value="100-2000">100-2000</Option>
                  <Option value="2000-9999">2000-9999</Option>
                  <Option value="9999以上">9999以上</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="薪资区间"
                name="Salary"
                key="Salary"
                initialValue={this.state.Salary}
              >
                <Select
                  value={this.state.Salary}
                  onChange={handleChange("Salary")}
                >
                  <Option value="0-5k">0-5k</Option>
                  <Option value="5-10k">5-10k</Option>
                  <Option value="10-20k">10-20k</Option>
                  <Option value="20-50k">20-50k</Option>
                  <Option value="50-100k">50-100k</Option>
                  <Option value="100k以上">100k以上</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="职位标签"
                name="postTag"
                key="postTag"
                initialValue={this.state.postTag.join("、")}
              >
                <Input
                  placeholder="可输入多条 以顿号隔开"
                  value={this.state.postTag.join("、")}
                  onChange={changeState("postTag")}
                />
              </Form.Item>
              <Form.Item
                label="工作经验"
                name="workingExperience"
                key="workingExperience"
                initialValue={this.state.workingExperience}
              >
                <Select
                  value={this.state.workingExperience}
                  onChange={handleChange("workingExperience")}
                >
                  <Option value="无工作经验">无工作经验</Option>
                  <Option value="0-1年">0-1年</Option>
                  <Option value="1-3年">1-3年</Option>
                  <Option value="3-5年">3-5年</Option>
                  <Option value="5-10年">5-10年</Option>
                  <Option value="10年以上">10年以上</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="学历要求"
                name="Education"
                key="Education"
                initialValue={this.state.Education}
              >
                <Select
                  value={this.state.Education}
                  onChange={handleChange("Education")}
                >
                  <Option value="初中">初中</Option>
                  <Option value="高中">高中</Option>
                  <Option value="大专">大专</Option>
                  <Option value="本科">本科</Option>
                  <Option value="硕士">硕士</Option>
                  <Option value="博士">博士</Option>
                  <Option value="院士">院士</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="融资阶段"
                name="FinancingStage"
                key="FinancingStage"
                initialValue={this.state.FinancingStage}
              >
                <Input
                  value={this.state.FinancingStage}
                  onChange={changeState("FinancingStage")}
                />
              </Form.Item>
              <Form.Item
                label="行业领域"
                name="industrySector"
                key="industrySector"
                initialValue={this.state.industrySector}
              >
                <Input
                  value={this.state.industrySector}
                  onChange={changeState("industrySector")}
                />
              </Form.Item>
              <Form.Item
                label="职位诱惑"
                name="jobTemptation"
                key="jobTemptation"
                initialValue={this.state.jobTemptation}
              >
                <Input
                  value={this.state.jobTemptation}
                  onChange={changeState("jobTemptation")}
                />
              </Form.Item>
            </Form>
          </Modal>
        )}
        <Modal
          visible={this.state.m2Visible}
          onOk={this.handleOk("remove")}
          onCancel={this.handleCancel("remove")}
          title="删除岗位"
          okText="确定"
          cancelText="取消"
          key="4"
        >
          <p>确定删除吗？(删除后可在回收站里恢复)</p>
        </Modal>
      </>
    );
  }
}
