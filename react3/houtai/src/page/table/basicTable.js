import React, { Component } from 'react';
import {Card,Table} from 'antd';
import axios from '../../axios/index';

class BasicTable extends Component {
  state={
    dataSource2:[],
  }
  componentDidMount(){
      const dataSource=[
        {
          id:'0',
          userName:'syf',
          sex:'1',
          state:'1',
          interest:'1',
          birthday:'2000-01-01',
          address:'杭州市-江干区',
          time:'09:00',
      },
      {
        id:'1',
        userName:'qwe',
        sex:'1',
        state:'1',
        interest:'1',
        birthday:'2000-01-01',
        address:'杭州市-江干区',
        time:'09:00',
    },
    {
        id:'2',
        userName:'rty',
        sex:'1',
        state:'1',
        interest:'1',
        birthday:'2000-01-01',
        address:'杭州市-江干区',
        time:'09:00',
    },
    ];
    this.setState({
        dataSource,
    });
    this.requset();
  }

requset=()=>{
    axios.ajax({
        url:'./table/list',
        data:{
            params:{
                page:1
            }
        }
    }).then((res)=>{
        console.log(res);
        if(res.code==0){
            this.setState({
                dataSource2:res.resule
            })
        }
    })
}

  render() {
    const columns=[
        {
            title:'id',
            dataIndex:'id',
        },
        {
            title:'用户名',
            dataIndex:'userName'
        },
        {
            title:'性别',
            dataIndex:'sex'
        },
        {
            title:'状态',
            dataIndex:'state'
        },
        {
            title:'爱好',
            dataIndex:'interest'
        },
        {
            title:'生日',
            dataIndex:'birthday'
        },
        {
            title:'地址',
            dataIndex:'address'
        },
        {
            title:'早起时间',
            dataIndex:'time'
        },
    ]    
    return (
      <div> 
          <Card title="基础表格">
            <Table
                bordered
                columns={columns}
                dataSource={this.state.dataSource}
                pagination={false}
            />
          </Card>
          <hr/>
          <Card title="动态数据渲染表格">
            <Table
                bordered
                columns={columns}
                dataSource={this.state.dataSource2}
            />
          </Card>
      </div>

    );
  }
}

export default BasicTable;
