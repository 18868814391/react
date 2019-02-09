import React, { Component } from 'react';
import {Button,Card, message,Form,Checkbox,Input,Radio,Select,DatePicker,TimePicker,Upload,Icon, InputNumber, Switch} from 'antd';
import moment from 'moment';

const FormItem=Form.Item;
const RadioGroup=Radio.Group;
const Option = Select.Option;
const TextArea=Input.TextArea;
class FormRegister extends Component {
  state={

  }
  handleSubmit=()=>{
    let userInfo=this.props.form.getFieldsValue();
    console.log(userInfo)
  }
  getBase64=(img, callback)=>{
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }  
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        userImg:imageUrl,
        loading: false,
      }));
    }
  }  
  render() {   
    const  {getFieldDecorator}=this.props.form;
    const formItemLayout={
        labelCol:{
            xs:24,
            sm:4
        },
        wrapperCol:{
            xs:24,
            sm:20
        }
    }
    const offsetLayout={
        wrapperCol:{
            xs:24,
            sm:{
                span:12,
                offset:4
            }
        }
    }
    const rowObject={
        minRows:4,maxRows:6
    }
    return (
      <div>    
          <Card title="注册表单">
            <Form>
                <FormItem label="用户名" {...formItemLayout}>
                {
                      getFieldDecorator('userName',{
                          initialValue:'',
                          rules:[
                              {
                                  required:true,
                                  message:'用户名不能为空'
                              },
                          ]
                      })(
                         <Input placeholder="请输入用户名"/> 
                      )  
                    }
                </FormItem>
                <FormItem label="密码" {...formItemLayout}>
                {
                      getFieldDecorator('userPwd',{
                          initialValue:'',
                          rules:[
                          ]
                      })(
                         <Input placeholder="请输入密码" type="password"/> 
                      )  
                    }
                </FormItem>
                <FormItem label="性别" {...formItemLayout}>
                {
                      getFieldDecorator('sex',{
                          initialValue:'1',
                      })(
                        <RadioGroup>
                            <Radio value="1">男</Radio>
                            <Radio value="2">女</Radio>
                        </RadioGroup>
                      )  
                    }
                </FormItem>
                <FormItem label="年龄" {...formItemLayout}>
                {
                      getFieldDecorator('age',{
                          initialValue:'18',
                      })(
                        <InputNumber></InputNumber>
                      )  
                    }
                </FormItem>
                <FormItem label="当前状态" {...formItemLayout}>
                {
                      getFieldDecorator('state',{
                          initialValue:'1',
                      })(
                        <Select>
                            <Option value="1">咸鱼一条</Option>
                            <Option value="2">超级大叔</Option>
                            <Option value="3">老哥稳住</Option>
                            <Option value="4">向日葵</Option>
                            <Option value="5">行星喷子</Option>
                            <Option value="6">巨大口嗨</Option>
                        </Select>
                      )  
                    }
                </FormItem>
                <FormItem label="爱好" {...formItemLayout}>
                {
                      getFieldDecorator('interest',{
                          initialValue:['1','2'],
                      })(
                        <Select mode="multiple">
                            <Option value="1">烧喷子</Option>
                            <Option value="2">干口嗨</Option>
                            <Option value="3">绊鬼火</Option>
                            <Option value="4">剪杀马特</Option>
                            <Option value="5">吃黑子</Option>
                            <Option value="6">弄事精</Option>
                        </Select>
                      )  
                    }
                </FormItem>
                <FormItem label="是否已婚" {...formItemLayout}>
                {
                      getFieldDecorator('isMarried',{
                          valueProName:'checked',
                          initialValue:true,
                      })(
                        <Switch></Switch>
                      )  
                    }
                </FormItem>
                <FormItem label="生日" {...formItemLayout}>
                {
                      getFieldDecorator('birthday',{
                          initialValue:moment('2018-08-08'),
                      })(
                        <DatePicker></DatePicker>
                      )  
                    }
                </FormItem>
                <FormItem label="联系地址" {...formItemLayout}>
                {
                      getFieldDecorator('address',{
                          initialValue:'杭州市江干区',
                      })(
                        <TextArea autosize={rowObject}
                        ></TextArea>
                      )  
                    }
                </FormItem>
                <FormItem label="起床时间" {...formItemLayout}>
                {
                      getFieldDecorator('time',{
                          
                      })(
                        <TimePicker></TimePicker>
                      )  
                    }
                </FormItem>
                <FormItem label="头像上传" {...formItemLayout}>
                {
                      getFieldDecorator('userImg',{
                        rules:[
                            {
                                required:true,
                            },
                        ]                           
                      })(
                        <Upload
                            listType="picture-card"
                            showUploadList={false}
                            action="//jsonplaceholder.typicode.com/posts/"
                            onChange={this.handleChange}
                        >
                          {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>}
                        </Upload>
                      )  
                    }
                </FormItem>
                <FormItem {...offsetLayout} labelCol={{}}>
                {
                      getFieldDecorator('userImg')(
                        <Checkbox>已经读过协议</Checkbox>
                      )  
                    }
                </FormItem>
                <FormItem {...offsetLayout} labelCol={{}}>
                    <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                </FormItem>
            </Form>
          </Card>
      </div>
    );
  }
}

export default Form.create()(FormRegister);
