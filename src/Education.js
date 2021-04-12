import React from "react";
import { Timeline, Row, Col, Typography, Tag } from "antd";

const { Title, Text } = Typography;

const TitleStyles = {
  color: "black",
  fontFamily: `"Lato", Arial, Tahoma, sans-serif`,
  fontWeight: 100,
  padding: "30px 0px"
};

const Education = () => {
  return (
    <Row align="middle" style={{ background: "#DCDCDC" }} id="education">
      <Col span={24} style={{ textAlign: "center" }}>
        <Title style={TitleStyles}>Education</Title>
      </Col>
      <Col span={20} offset={2}>
        <Timeline mode="alternate">
          <Timeline.Item label={<Tag>December, 2018</Tag>}>
            <Title level={3}>Masters in Engineering Management</Title>
            <Title level={5}>Duke University</Title>
            <Text>
              The desire to gain experience on business strategies of technology driven projects,
              churned an interest inside me to pursue this degree. I developed
              the thirst to learn how to apply technology to managerial
              programs. Earning this degree built my technical knowledge depth,
              increased my business acumen and also expanded my network.
            </Text>
          </Timeline.Item>
          <Timeline.Item label={<Tag>May, 2015</Tag>}>
            <Title level={3}>Bachelors in Computer Science</Title>
            <Title level={5}>Manipal University</Title>
            <Text>
              Having got a taste of computer technology, programming and learning about product development basics in high school, I decided this would my path.
              With this trait, I decided to pursue Computer Science and
              Engineering and learnt concepts like product lifecycle,
              development, maintenance and code.
            </Text>
          </Timeline.Item>
          <Timeline.Item label={<Tag>December, 2011</Tag>}>
            <Title level={3}>Higher Secondary, Sciences</Title>
            <Title level={5}>Deeksha Center For Learning</Title>
            <Text>
              Since childhood, having a predilection towards solving problems,
              Mathematics and Computer Science became my favourite subjects in
              school. Wanting to pursue this, I took up Sciences in Higher Secondary with an passiom to set my foot into the future of technology
            </Text>
          </Timeline.Item>
        </Timeline>
      </Col>
    </Row>
  );
};

export default Education;
