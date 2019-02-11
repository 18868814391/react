import React, { Component } from 'react';
import {Card,Table, Modal,Button,message} from 'antd';
import axios from '../../axios/index';
import Utils from '../../utils/utils';

class HighTable extends Component {
  state={

  }
  params={
    page:1
  }
  componentDidMount(){
    this.requset()
  }

  requset=()=>{
    let self=this;
    axios.ajax({
        url:'./table/high/list',
        data:{
            params:{
                page:self.params.page
            }
        }
    }).then((res)=>{
        console.log(res);
        if(res.code==0){
            res.resule.list.map((item,index)=>{
                item.key=index;
            })
            this.setState({
                dataSource:res.resule.list,
            })
        }
    })
}

handleChange=()=>{
  
}
  render() {
    const columns=[
      {
          title:'id',
          dataIndex:'id',
          width:80,
      },
      {
          title:'用户名',
          dataIndex:'userName',
          width:80,
      },
      {
          title:'性别',
          dataIndex:'sex',
          width:80,
          render(sex){
              return sex==1?'男':'女'
          }
      },
      {
          title:'状态',
          dataIndex:'state',
          width:80,
          render(state){
              let config={
                  '1':'咸鱼',
                  '2':'喷子',
                  '3':'甲鱼',
                  '4':'跳跳鱼',
                  '5':'213',
              }
              return config[state];
          }
      },
      {
          title:'爱好',
          width:80,
          dataIndex:'interest'
      },
      {
          title:'生日',
          width:80,
          dataIndex:'birthday'
      },
      {
          title:'地址',
          width:80,
          dataIndex:'address'
      },
      {
          title:'早起时间',
          width:80,
          dataIndex:'time'
      },
  ]    
  const columns2=[
    {
        title:'id',
        dataIndex:'id',
        width:80,
        fixed:'left',
    },
    {
        title:'用户名',
        dataIndex:'userName',
        width:80,
        fixed:'left',
    },
    {
        title:'性别',
        dataIndex:'sex',
        width:80,
        render(sex){
            return sex==1?'男':'女'
        }
    },
    {
        title:'状态',
        dataIndex:'state',
        width:80,
        render(state){
            let config={
                '1':'咸鱼',
                '2':'喷子',
                '3':'甲鱼',
                '4':'跳跳鱼',
                '5':'213',
            }
            return config[state];
        }
    },
    {
        title:'爱好',
        width:80,
        dataIndex:'interest'
    },
    {
        title:'生日',
        width:80,
        dataIndex:'birthday',
        key:'birthday'
    },
    {
      title:'生日',
      width:80,
      dataIndex:'birthday',
      key:'birthday2'
  },
  {
    title:'生日',
    width:80,
    dataIndex:'birthday',
    key:'birthday3'
},
{
  title:'生日',
  width:80,
  dataIndex:'birthday',
  key:'birthday4'
},
{
  title:'生日',
  width:80,
  dataIndex:'birthday',
  key:'birthday5'
},
{
  title:'生日',
  width:80,
  dataIndex:'birthday',
  key:'birthday6'
},
    {
        title:'地址',
        width:80,
        dataIndex:'address'
    },
    {
        title:'早起时间',
        width:80,
        dataIndex:'time',
        fixed:'right'
    },
] 
const columns3=[
  {
      title:'id',
      dataIndex:'id',
      key:'id',
  },
  {
      title:'用户名',
      dataIndex:'userName',
      key:'userName'
  },
  {
      title:'性别',
      dataIndex:'sex',
      key:'sex',
      render(sex){
          return sex==1?'男':'女'
      }
  },
  {
    title:'年龄',
    dataIndex:'age',
    key:'age',
    sorter:(a,b)=>{
      return a.age-b.age;
    },
    sortOrder:this.state.sortOrder,
},
  {
      title:'状态',
      dataIndex:'state',
      key:'state',
      render(state){
          let config={
              '1':'咸鱼',
              '2':'喷子',
              '3':'甲鱼',
              '4':'跳跳鱼',
              '5':'213',
          }
          return config[state];
      }
  },
  {
      title:'爱好',
      dataIndex:'interest',
      key:'interest'
  },
  {
      title:'生日',
      dataIndex:'birthday',
      key:'birthday'
  },
  {
      title:'地址',
      dataIndex:'address',
      key:'address'
  },
  {
      title:'早起时间',
      dataIndex:'time',
      key:'time',
  },
]   
    return (
      <div> 
          <Card title="头部固定">
            <Table
                bordered
                columns={columns}
                dataSource={this.state.dataSource}
                pagination={false}
                scroll={{y:240}}
            />
          </Card>
          <hr/>
          <Card title="左侧固定">
            <Table
                bordered
                columns={columns2}
                dataSource={this.state.dataSource}
                pagination={false}
                scroll={{x:1050}}
            />
          </Card>     
          <hr/>
          <Card title="表格排序">
            <Table
                bordered
                columns={columns3}
                dataSource={this.state.dataSource}
                pagination={false}
                onChange={this.handleChange}
            />
          </Card>             
      </div>

    );
  }
}

export default HighTable;
