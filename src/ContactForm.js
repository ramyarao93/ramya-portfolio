import React from 'react';
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
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const ContactForm = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
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

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Send a message
          </Button>
        </Form.Item>
      </Form>
    );
};

export default ContactForm;