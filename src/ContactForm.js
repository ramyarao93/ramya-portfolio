import React from 'react';
import emailjs from "emailjs-com";

import {
    Form,
    Input,
    Button
} from 'antd';
const { TextArea } = Input;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};

const ContactForm = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
      emailjs
        .send(
          "service_vkg5ws8",
          "template_ttdki9h",
          values,
          "user_vhRLddNP3oYUF3GjcWenm"
        )
        .then(
          response => {
            console.log("SUCCESS!", response.status, response.text);
          },
          err => {
            console.log("FAILED...", err);
          }
        );
    };

    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86"
        }}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name",
              whitespace: true
            }
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!"
            },
            {
              required: true,
              message: "Please input your E-mail!"
            }
          ]}
        >
          <Input placeholder="E-mail" />
        </Form.Item>

        <Form.Item
          name="subject"
          rules={[
            {
              required: true,
              message: "Please input your subject",
              whitespace: true
            }
          ]}
        >
          <Input placeholder="Subject" />
        </Form.Item>

        <Form.Item
          name="message"
          rules={[
            {
              required: true,
              message: "Please input your message",
              whitespace: true
            }
          ]}
        >
          <TextArea rows={6} placeholder="Message" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send a message
          </Button>
        </Form.Item>
      </Form>
    );
};

export default ContactForm;