import React from "react";
import { Row, Col, Typography, List, Divider } from "antd";
const { Title, Text } = Typography;

const TitleStyles = {
    color: "black",
    fontFamily: `"Lato", Arial, Tahoma, sans-serif`,
    fontWeight: 100,
    padding: "15px 0px",
    marginBottom: "0px"
};

const seniorDeveloperAtChainyardList = [
    "Designed and developed a web interface in a supplier-buyer relationship model, multiple plugins and micro services supported on a blockchain network",
    "Built a micro service front end component in React to make the sprint cycle more efficient",
    "Built UI and backend components for dynamic form generations using JSON file loaders",
    "Built a React project - “ProjectKicker” which enabled any new team in the company to use in order to set up a base template of the UI project structure",
    "Responsible for project planning and enhancements in every sprint and participated in agile sprint planning with the product and QA team."
];

const developerAtChainyardList = [
    "Lead frontend developer of a blockchain application across the supply chain space for maintaining relief efforts during natural disasters, winning the International Stevies Award for Community Impact",
    "Developed a web interface that used the concept of cryptocurrency across the blockchain platform which allow financial institutions to use a distributed ledger for settlement.",
    "Created and integrated scalable UI services which provided fast and secure communication between the front end and the backend RESTful APIs",
    "Created and integrated scalable UI services which provided fast and secure communication between the front end and the backend RESTful APIs"
];

const developerAtTinystepList = [
    "Developed front end as well as backend server code for a parenting website using React, Bootstrap and Node JS libraries.",
    "Analyzed and tracked weekly data of users, using Google Analytics and Excel, and developed upcoming features by making data - driven decisions",
    "Worked on code, images, files and data of a huge user base on MongoDB and SQL",
    "Collaborated with product designers to create clean interfaces, simple intuitive interactions and experiences increasing the web monthly traffic from 24K to 2.8 Million"
];

const analystAtDeloitteList = [
    "Coded and tested functionalities for a health insurance exchange project, thereby working on the development of client requirements",
    "Owned and facilitated regression, database and user acceptance testing for 100k+ users",
    "Developed and executed test scripts using several tools and ensured error and fatalities free code"
];

const internList = [
    "Programmed the website analytics and front-end development for uploading electronic medical records, on a patient - doctor interface platform, ensuring performance improvement of project modules.",
    "Implemented responsible web design principles to build an interface, compatible with multiple devices",
    "Analyzed web traffic to determine, recommend, and plan the modification of the existing modules for user - friendly and optimized results"
];

const ExperienceList = ({ experienceList }) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={experienceList}
            renderItem={item => (
                <List.Item>
                    <Text type="secondary">{item}</Text>
                </List.Item>
            )}
            style={{ textAlign: "left" }}
        />
    );
};

const ExperienceCard = ({ role, location, responsibility, experienceList }) => {
    return (
        <>
            <Row justify="space-around" align="middle">
                <Col span={6}>
                    <Title level={5}>{role}</Title>
                    <Text>{location}</Text>
                </Col>
                <Col span={18} style={{ textAlign: "left" }}>
                    <Text>{responsibility}</Text>
                    <ExperienceList experienceList={experienceList} />
                </Col>
            </Row>
            <Divider />
        </>
    );
};

const Experience = () => {
    return (
        <div id="experience">
            <Row>
                <Col span={24}>
                    <Title style={TitleStyles}>Experience</Title>
                </Col>
            </Row>
            <Row style={{ background: "white" }}>
                <Col span={24}>
                    <ExperienceCard
                        role="Senior Frontend Developer"
                        location="Chainyard, North Carolina, USA"
                        responsibility="Worked closely with blockchain concepts and technology. Responsible for building applications using these concepts to make sure we deliver modern, frictionless experiences using the latest front end tools."
                        experienceList={seniorDeveloperAtChainyardList}
                    />
                    <ExperienceCard
                        role="Frontend Developer"
                        location="Chainyard, North Carolina, USA"
                        responsibility=""
                        experienceList={developerAtChainyardList}
                    />
                    <ExperienceCard
                        role="Software Engineer Intern"
                        location="eimageGlobal Inc, North Carolina, USA"
                        responsibility="Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis."
                        experienceList={internList}
                    />
                    <ExperienceCard
                        role="Frontend Developer"
                        location="Tinystep, Bangalore, India"
                        responsibility="Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis."
                        experienceList={developerAtTinystepList}
                    />
                    <ExperienceCard
                        role="Business Technology Analyst"
                        location="Deloitte, Bangalore, India"
                        responsibility="Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis."
                        experienceList={internList}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Experience;
