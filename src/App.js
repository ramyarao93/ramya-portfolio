import React from "react";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import "./App.css";
import { Layout, Row, Col, Anchor, Typography } from "antd";

const { Content, Sider } = Layout;
const { Title } = Typography;
const { Link } = Anchor;

const TextLevelForNavigation = 5;
const TitleStyleForNavigation = {
  fontWeight: 100
};

const App = () => {
  return (
    <Layout>
      <Sider style={{ padding: "20% 20px" }} theme="light">
        <Anchor>
          <Link
            href="#about"
            title={
              <Title
                level={TextLevelForNavigation}
                style={TitleStyleForNavigation}
              >
                About
              </Title>
            }
          />
          <Link
            href="#skills"
            title={
              <Title
                level={TextLevelForNavigation}
                style={TitleStyleForNavigation}
              >
                Skills
              </Title>
            }
          />
          <Link
            href="#experience"
            title={
              <Title
                level={TextLevelForNavigation}
                style={TitleStyleForNavigation}
              >
                Experience
              </Title>
            }
          />
          <Link
            href="#education"
            title={
              <Title
                level={TextLevelForNavigation}
                style={TitleStyleForNavigation}
              >
                Education
              </Title>
            }
          />
          <Link
            href="#contact"
            title={
              <Title
                level={TextLevelForNavigation}
                style={TitleStyleForNavigation}
              >
                Contact
              </Title>
            }
          />
        </Anchor>
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            <Row>
              <Col
                span={20}
                offset={2}
                style={{
                  boxShadow:
                    "0 0px 0px 0px white, 0 -0px 0px 0px white, 12px 0 15px -4px rgba(128,128,128, 0.8), -12px 0 15px -4px rgba(128,128,128, 0.8)"
                }}
              >
                <About />
                <Skills />
                <Experience />
                <Education />
                <Contact />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
