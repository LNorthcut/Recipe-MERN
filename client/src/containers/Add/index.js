import { Layout } from 'antd';
import TheNav from '../../components/NavBar';
import { useState } from 'react';
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};
const { Header, Footer, Sider, Content } = Layout;


  
const onFinish = (values: any) => {
  console.log('Received values of form: ', values);
};

function AddR (){

  return(
    
    <>
       
      <TheNav/>
      <Content>  
     {/* FORM */}
     <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        'cooking-time': 5,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
    >
      <Form.Item label="Plain Text">
        <span className="ant-form-text">Welcome</span>
      </Form.Item>
      <Form.Item
        name="select"
        label="Select"
        hasFeedback
        rules={[{ required: true, message: 'Please select your meal type!' }]}
      >
        <Select placeholder="Please select your meal type">
          <Option value="breakfast">Breakfast</Option>
          <Option value="brunch">Brunch</Option>
          <Option value="lunch">Lunch</Option>
          <Option value="snack">Snack</Option>
          <Option value="dinner">Dinner</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="select tags"
        label="Select[multiple]"
        rules={[{ required: true, message: 'Please select corresponding tags!', type: 'array' }]}
      >
        <Select mode="multiple" placeholder="Please select corresponding tags">
          <Option value="red">Kid Friendly</Option>
          <Option value="green">Spice Lovers</Option>
          <Option value="blue">Fresh Taste</Option>
        </Select>
      </Form.Item>

      <Form.Item label="InputNumber">
        <Form.Item name="cooking-time" noStyle>
          <InputNumber min={5} max={420} />
        </Form.Item>
        <span className="ant-form-text"> minutes</span>
      </Form.Item>

          {/* the switch  */}
      {/* <Form.Item name="switch" label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item> */}

      <Form.Item name="Difficulty-Level" label="Difficulty-Level">
        <Slider
          marks={{
            0: 'Super Simple',
            25: 'Ages 11+',
            50: 'Family Friendly',
            75: 'Prepping Suggested',
            100: 'Prepping Required'
          }}
        />
      </Form.Item>

      <Form.Item name="radio-group" label="Radio.Group">
        <Radio.Group>
          <Radio value="a">item 1</Radio>
          <Radio value="b">item 2</Radio>
          <Radio value="c">item 3</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="radio-button"
        label="Radio.Button"
        rules={[{ required: true, message: 'Please pick an item!' }]}
      >
        <Radio.Group>
          <Radio.Button value="a">item 1</Radio.Button>
          <Radio.Button value="b">item 2</Radio.Button>
          <Radio.Button value="c">item 3</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="checkbox-group" label="Checkbox.Group">
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox value="A" style={{ lineHeight: '32px' }}>
                A
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="B" style={{ lineHeight: '32px' }} disabled>
                B
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="C" style={{ lineHeight: '32px' }}>
                C
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="D" style={{ lineHeight: '32px' }}>
                D
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="E" style={{ lineHeight: '32px' }}>
                E
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="F" style={{ lineHeight: '32px' }}>
                F
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="rate" label="Rate">
        <Rate />
      </Form.Item>

      {/* <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="longgggggggggggggggggggggggggggggggggg"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item> */}

      <Form.Item label="Dragger">
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Content>
      {/* <Footer>Footer</Footer> */}
   
    </>
  )
}

export default AddR;