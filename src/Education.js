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
              Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra
              a, dapibus at dolor. In iaculis viverra neque, ac eleifend ante
              lobortis id. In viverra ipsum stie id viverra.
            </Text>
          </Timeline.Item>
          <Timeline.Item label={<Tag>May, 2015</Tag>}>
            <Title level={3}>Bachelors in Computer Science</Title>
            <Title level={5}>Manipal University</Title>
            <Text>
              Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra
              a, dapibus at dolor. In iaculis viverra neque, ac eleifend ante
              lobortis id. In viverra ipsum stie id viverra.
            </Text>
          </Timeline.Item>
          <Timeline.Item label={<Tag>December, 2011</Tag>}>
            <Title level={3}>Schooling</Title>
            <Title level={5}>Mount Carmel</Title>
            <Text>
              Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra
              a, dapibus at dolor. In iaculis viverra neque, ac eleifend ante
              lobortis id. In viverra ipsum stie id viverra.
            </Text>
          </Timeline.Item>
        </Timeline>
      </Col>
    </Row>
  );
};

export default Education;
