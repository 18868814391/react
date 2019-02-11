import React, { Component } from 'react';
import {Button,Card,Table,Form, Select,} from 'antd';
import axios from '../../axios/index';
import Utils from '../../utils/utils';
const FormItem=Form.Item;
const Option=Select.Option;

class City extends Component {
  state={

  }
  render() {  
    return (
      <div> 
        <Card title="城市233">
          
        </Card> 
      </div>

    );
  }
}

export default City;

class FilterForm extends React.Component{
  render(){
    const{getFieldDecorator}=this.props.form;
    return(
      <Form layout="inline">
        <FormItem label="城市">
          {
            getFieldDecorator('city_id')(
              <Select
                placeholder="请选择"
              >
                <Option value="1">北京市</Option>
                <Option value="2">天津市</Option>
                <Option value="3">深圳市</Option>
              </Select>  
            )
          }
        </FormItem>  
      </Form>  
    )
  }
}

