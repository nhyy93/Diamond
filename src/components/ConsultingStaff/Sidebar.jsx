import React from "react";
import { DesktopOutlined, UserOutlined, SolutionOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Sider } = Layout;


const Sidebar = () => {
    return (
        <Sider
          style={{
            height: "100vh",
            position: "fixed",
            background: "#000000",
          }}
        >
          <div
          >
            <img
              src="https://t4.ftcdn.net/jpg/02/39/44/75/360_F_239447528_qWYSonUIwGoNC290SfOBq8Gvy3x8ownV.jpg"
              alt="logo"
              style={{ width: "100%", height: "180px" }}
            />
          </div>
          <Menu theme='dark' defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<DesktopOutlined />}>
              <Link to="/consultingStaff">Orders</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link>Valuation Result</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<SolutionOutlined />}>
              <Link>Notifications</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<SolutionOutlined />}>
              <Link>Messages</Link>
            </Menu.Item>
          </Menu>
        </Sider>
      );
}

export default Sidebar