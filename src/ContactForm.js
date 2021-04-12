import React from 'react';

import {
  Typography
} from 'antd';
const { Title } = Typography;

const TitleStyles = {
  fontFamily: `"Lato", Arial, Tahoma, sans-serif`,
  fontWeight: 100
};

const ContactForm = () => {

  return (
    <Title level={3} style={TitleStyles}>
      Reach out to me{" "}
      <a href="mailto:ramyarao041293@gmail.com" rel="noopener noreferrer">
        here
      </a>
    </Title>
  );
};

export default ContactForm;