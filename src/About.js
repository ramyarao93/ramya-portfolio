import React from "react";
import { Row, Col, Image, Typography } from "antd";
import AboutImage from "./images/Portfolio-About.jpeg";

const { Title, Text } = Typography;

const TitleStyles = {
  color: "white",
  fontFamily: `"Lato", Arial, Tahoma, sans-serif`,
  fontWeight: 100
};

const TextStyles = {
  color: "white",
  fontFamily: `"Lato", Arial, Tahoma, sans-serif`,
  fontWeight: 100
};

const About = () => {
  return (
    <Row
      align="middle"
      justify="center"
      style={{ background: "#373737" }}
      id="about"
    >
      <Col span={12} style={{ padding: "0 15px" }}>
        <Title style={TitleStyles}>Ramya Rao</Title>
        <Text style={TextStyles}>
          Experienced Front End Developer with a demonstrated history of working
          in the information technology and services industry. Skilled in
          Agile Practices, Web Development and Product Management. Strong
          engineering professional with a Masters focused in Engineering
          Management which has taught me to apply technical concepts to the
          business overview.
        </Text>
      </Col>
      <Col span={12}>
        <Image src={AboutImage} />
      </Col>
    </Row>
  );
};

export default About;
