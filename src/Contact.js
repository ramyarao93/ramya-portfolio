import React from "react";
import { Row, Col, Typography } from "antd";
import {
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined
} from "@ant-design/icons";
import ContactForm from "./ContactForm";
const { Title } = Typography;

const iconStyle = {
  fontSize: "2em",
  color: "black"
};

const TitleStyles = {
  fontFamily: `"Lato", Arial, Tahoma, sans-serif`,
  fontWeight: 100
};

const SocialMediaIcon = ({ icon, link }) => {
  return (
    <Col span={8}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </Col>
  );
};

const Contact = () => {
  return (
    <Row
      style={{ background: "#c7d6d2", padding: "20px" }}
      id="contact"
    >
      <Col span={24}>
        <Row>
          <Col span={24}>
            <Title level={3} style={TitleStyles}>
              Let's talk! Look me up on
            </Title>
          </Col>
          <Col span={24} style={{ padding: "20px" }}>
            <Row>
              <SocialMediaIcon
                icon={<LinkedinOutlined style={iconStyle} />}
                link="https://www.linkedin.com/in/ramya-0412"
              />
              <SocialMediaIcon
                icon={<FacebookOutlined style={iconStyle} />}
                link="https://www.facebook.com/ramya.rao.90"
              />
              <SocialMediaIcon
                icon={<InstagramOutlined style={iconStyle} />}
                link="https://www.instagram.com/ramyaarao_"
              />
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <ContactForm />
      </Col>
    </Row>
  );
};

export default Contact;
