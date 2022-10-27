import { Button, Checkbox, Form, Input, Row, Col, Select, DatePicker } from "antd";
import { Option } from "antd/lib/mentions";
import Link from "next/link";
import { Headpart, Layout} from '../../components';
import Banner from '../../components/Banner/banner';

const Contact = () => {


  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();
  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;
      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;
      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );



  return (
    <div>
    <Headpart pagetitle="Contact Page" />
    <Layout>
    <div className="banner-area">
          <Banner/>
          <div className="info">
            <h2>Contact Us</h2>
            <ul>
              <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li><span>/</span></li>
              <li>Contact Us</li>
            </ul>
          </div>
    </div>

    <Form className="contactform" name="basic" labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }} initialValues={{ remember: true }} onFinish={onFinish}
          onFinishFailed={onFinishFailed} autoComplete="off">
      
       <Row justify="space-between" gutter={[16, 16]}>
          <Col xs={24} md={12} lg={12}>
       <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>
       </Col>

       <Col xs={24} md={12} lg={12}>
       <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>
       </Col>

       <Col xs={24} md={12} lg={12}>
       <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
       </Col>

       <Col xs={24} md={12} lg={12}>
       <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
       </Col>

       <Col xs={24} md={12} lg={12}>
       <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
       </Col>

       <Col xs={24} md={12} lg={12}>
       <Form.Item label="DatePicker">
        <DatePicker className="datearea"/>
      </Form.Item>
       </Col>

       <Col span={24}>
        <row gutter={[0]}>
        <Col xs={24}>
       <Form.Item name="remember" valuePropName="checked" wrapperCol={{span: 24}}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
       </Col>

       <Col xs={24}>
       <Form.Item wrapperCol={{span: 24}}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
       </Form.Item>
       </Col>
        </row>
       </Col>

 
       </Row>
       </Form>
    </Layout>
    
    </div>
  )
}

export default Contact;