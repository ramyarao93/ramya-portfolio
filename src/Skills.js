import React from "react";
import { Row, Col, Typography, Progress } from "antd";
import { CodeOutlined, BookOutlined, ToolOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const cardStyles = {
  padding: "0 20px",
  textAlign: "center"
};

const TitleStyles = {
  color: "black",
  fontFamily: `"Lato", Arial, Tahoma, sans-serif`,
  fontWeight: 100,
  padding: "15px 0px"
};

const TextStyles = {
  color: "black",
  fontFamily: `"Lato", Arial, Tahoma, sans-serif`,
  fontWeight: 100
};

const ProgressCard = ({ skillPercentage, skillName }) => {
  return (
    <Row style={{ textAlign: "left", padding: "15px 0px" }}>
      <Col span={24}>
        <Text type="secondary" style={TextStyles}>
          {skillName}
        </Text>
        <Progress
          percent={skillPercentage}
          status="active"
          trailColor="#A9A9A9"
          strokeWidth={15}
          strokeLinecap="square"
          strokeColor="black"
        />
      </Col>
    </Row>
  );
};

const SkillCard = ({ icon, skillCategory, skillDescription, skillList }) => {
  return (
    <Col span={8} style={cardStyles}>
      {icon}
      <Title level={4} style={TitleStyles}>
        {skillCategory}
      </Title>
      <Text style={TextStyles}>{skillDescription}</Text>
      {skillList.map(skill => {
        return (
          <ProgressCard
            skillPercentage={skill.skillPercentage}
            skillName={skill.skillName}
          />
        );
      })}
    </Col>
  );
};

const Skills = () => {
  const frontEndSkillList = [
    {
      skillName: "React",
      skillPercentage: "90"
    },
    {
      skillName: "Javascript",
      skillPercentage: "90"
    },
    {
      skillName: "Node JS",
      skillPercentage: "80"
    },
    {
      skillName: "Antd",
      skillPercentage: "90"
    },
    {
      skillName: "Carbon",
      skillPercentage: "90"
    },
    {
      skillName: "HTML/CSS",
      skillPercentage: "95"
    }
  ];

  const devToolsSkillList = [
    {
      skillName: "GIT",
      skillPercentage: "95"
    },
    {
      skillName: "JIRA",
      skillPercentage: "90"
    },
    {
      skillName: "Invision",
      skillPercentage: "75"
    },
    {
      skillName: "Zeplin",
      skillPercentage: "85"
    },
    {
      skillName: "MongoDB",
      skillPercentage: "90"
    },
    {
      skillName: "SQL",
      skillPercentage: "83"
    }
  ];

  const mentorshipSkillList = [
    {
      skillName: "Team Player",
      skillPercentage: "100"
    },
    {
      skillName: "Leadership",
      skillPercentage: "90"
    },
    {
      skillName: "Intern Trainer",
      skillPercentage: "93"
    },
    {
      skillName: "Peer Coaching",
      skillPercentage: "95"
    }
  ];

  return (
    <div style={{ padding: "25px 0px", background: "#dbc596" }} id="skills">
      <Row justify="center">
        <Col span={4}>
          <Title style={TitleStyles}>My skills</Title>
        </Col>
      </Row>
      <Row>
        <SkillCard
          skillCategory="Front-end Developer"
          skillDescription="I like to code things from scratch, and enjoy bringing ideas to
          life in the browser."
          skillList={frontEndSkillList}
          icon={
            <CodeOutlined style={{ fontSize: "4em", padding: "25px 0px" }} />
          }
        />
        <SkillCard
          skillCategory="Development Tools"
          skillDescription="I value efficient product management tools and thoughtful interactions."
          skillList={devToolsSkillList}
          icon={
            <ToolOutlined style={{ fontSize: "4em", padding: "25px 0px" }} />
          }
        />
        <SkillCard
          skillCategory="Mentorship and Leader"
          skillDescription="I care about people, and love helping fellow colleagues and learn from them as well."
          skillList={mentorshipSkillList}
          icon={
            <BookOutlined style={{ fontSize: "4em", padding: "25px 0px" }} />
          }
        />
      </Row>
    </div>
  );
};

export default Skills;
