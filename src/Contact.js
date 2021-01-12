import React from "react";
import { Row, Col, Typography, Anchor } from "antd";
import {
    FacebookOutlined,
    LinkedinOutlined,
  InstagramOutlined,
    MailOutlined
} from "@ant-design/icons";
import ContactForm from "./ContactForm";
const { Title, Text } = Typography;
const { Link } = Anchor;

const iconStyle = {
    fontSize: "2em"
};

const TitleStyles = {
    color: "white",
    fontFamily: `"Lato", Arial, Tahoma, sans-serif`,
    fontWeight: 100
    // padding: "15px 0px"
};

const TextStyles = {
    color: "white",
    fontFamily: `"Lato", Arial, Tahoma, sans-serif`,
    fontWeight: 100
};

const SocialMediaIcon = ({ icon, link }) => {
  return (
    <Col span={3} offset={1}>
        {icon}
    </Col>
  );
};

const Contact = () => {
    return (
      <Row
        style={{ background: "#6f8c84", padding: "20px" }}
        justify="center"
        id="contact"
      >
        <Col span={8} push={2}>
          <Row>
            <Title level={2} style={TitleStyles}>
              Write a message
            </Title>
            <Col span={24} style={{ marginBottom: "10px" }}>
              <Text style={TextStyles}>
                Vestibulum commodo volutpat a, convallis ac, laoreet enim.
                Phasellus fermentum in, dolor.
              </Text>
            </Col>
            <SocialMediaIcon
              icon={<LinkedinOutlined style={iconStyle} />}
              link="https://www.linkedin.com/in/ramya-0412/"
            />
            <SocialMediaIcon icon={<MailOutlined style={iconStyle} />} />
            <SocialMediaIcon icon={<FacebookOutlined style={iconStyle} />} />
            <SocialMediaIcon icon={<InstagramOutlined style={iconStyle} />} />
          </Row>
        </Col>
        <Col span={16} push={4}>
          <ContactForm />
        </Col>
      </Row>
    );
};

export default Contact;
