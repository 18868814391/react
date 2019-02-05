import React, { Component } from 'react';
import {Button,Card,Radio} from 'antd';
import './ui.less'

class Buttons extends Component {
  state={
    loading:true,
    size:'default',
  }

  handleCloseLoding=()=>{
    let aaa=this.state.loading;
    this.setState({
      loading:!aaa,
    })
  }
  handleBack=()=>{
    window.history.go(-1);
  }
  handleGo=()=>{
    window.history.go(1);
  }  
  handleChange=(e)=>{
    this.setState({
      size:e.target.value,
    })
  }

  render() {   
    return (
      <div> 
        <Card title="基础按钮">
          <Button type="primary">syf</Button>
          <Button>syf</Button>
          <Button type="dashed">syf</Button>
          <Button type="danger">syf</Button>
          <Button type="disabled">syf</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primay" icon="dowmload">下载</Button>
        </Card>   
        <Card title="loading按钮">
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" shape="circle" loading={this.state.loading}></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handleCloseLoding}>关闭</Button>
        </Card> 
        <Card title="按钮组">
          <Button.Group>
            <Button type="primary" icon="left" onClick={this.handleBack}>返回</Button>
            <Button type="primary" icon="right" onClick={this.handleGo}>前进</Button>
          </Button.Group>  
        </Card>  
        <Card title="按钮尺寸">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="defaule">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>  
          <Button type="primary" size={this.state.size}>syf</Button>
          <Button size={this.state.size}>syf</Button>
          <Button type="dashed" size={this.state.size}>syf</Button>
          <Button type="danger" size={this.state.size}>syf</Button>
        </Card>                     
      </div>

    );
  }
}

export default Buttons;
