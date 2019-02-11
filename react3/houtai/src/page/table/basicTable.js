import React, { Component } from 'react';
import {Card,Table, Modal,Button,message} from 'antd';
import axios from '../../axios/index';
import Utils from '../../utils/utils';

class BasicTable extends Component {
  state={
    dataSource2:[],
  }
  params={
      page:1
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
    dataSource.map((item,index)=>{
        item.key=index
    })
    this.setState({
        dataSource,
    });
    this.requset();
  }

requset=()=>{
    let self=this;
    axios.ajax({
        url:'./table/list',
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
                dataSource2:res.resule.list,
                selectedRowKeys:[],
                selectedRowKeys:null,
                pagination:Utils.pagination(res,(current)=>{
                    self.params.page=current;
                    this.requset();
                }),
            })
        }
    })
}
onRowClick=(record,index)=>{
    let selectKey=[index];
    Modal.info({
        title:'信息',
        content:`用户名：${record.userName},用户爱好：${record.state}`
    })
    this.setState({
        selectedRowKeys:selectKey,
        selectedItem:record,
    })
}
handleDelete=(()=>{
    let rows=this.state.selectedRows;
    let ids=[];
    rows.map((item)=>{
        ids.push(item.id)
    })
    Modal.confirm({
        title:'删除提示',
        content:`确定删除？${ids.join(',')}`,
        onOk:()=>{
            message.success('删除成功');
            this.requset();
        }
    })
})

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
            dataIndex:'sex',
            render(sex){
                return sex==1?'男':'女'
            }
        },
        {
            title:'状态',
            dataIndex:'state',
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
    const selectedRowKeys=this.state.selectedRowKeys;
    const rowSelection={
        type:'radio',
        selectedRowKeys
    }   
    const rowCheckSelection={
        type:'checkbox',
        selectedRowKeys,
        onChange:(selectedRowKeys,selectedRows)=>{
            this.setState({
                selectedRowKeys,
                selectedRows
            })
        }
    }
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
          <hr/>
          <Card title="syf-单选">
            <Table
                bordered
                rowSelection={rowSelection}
                onRow={(record,index)=>{
                    return{
                        onClick:()=>{
                            this.onRowClick(record,index);
                        }
                    }
                }}
                columns={columns}
                dataSource={this.state.dataSource2}
            />
          </Card>
          <hr/>
          <Card title="syf-复选">
            <div>
                <Button onClick={this.handleDelete}>删除</Button>
            </div>    
            <Table
                bordered
                rowSelection={rowCheckSelection}
                columns={columns}
                dataSource={this.state.dataSource2}
            />
          </Card>
          <hr/>
          <Card title="syf-分页">  
            <Table
                bordered
                columns={columns}
                dataSource={this.state.dataSource2}
                pagination={this.state.pagination}
            />
          </Card>
      </div>

    );
  }
}

export default BasicTable;
