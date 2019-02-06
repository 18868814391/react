import React, { Component } from 'react';
import {Button,Card,Tabs,message,Icon} from 'antd';
import './ui.less'

class Meaasge extends Component {
    newTabIndex=0;
  state={

  }
  callback=(key)=>{
    message.info('你选择了,'+key)
  }
  onchange=(activeKey)=>{
    this.setState({
        activeKey
    })
  }
  onEdit=(targetkey,action)=>{
    this[action](targetkey);
  }
  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  }  
  componentWillMount(){
      const panes=[
          {title:'tab1',content:'111',key:'1'},
          {title:'tab2',content:'222',key:'2'},
          {title:'tab3',content:'333',key:'3'},
      ];
      this.setState({
          activeKey:panes[0].key,
          panes
      })
  }
  render() {  
    const TabPane=Tabs.TabPane;
    return (
      <div> 
        <Card title="tab页签">
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="tab 1" key="1">1111</TabPane>
                <TabPane tab="tab 2" key="2" disabled>2222</TabPane>
                <TabPane tab="tab 3" key="3">3333</TabPane>
            </Tabs>
        </Card>   
        <Card title="tab带图的页签">
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab={<span><Icon type="plus"/>Tab1</span>} key="1">1111</TabPane>
                <TabPane tab={<span><Icon type="edit"/>Tab2</span>} key="2">2222</TabPane>
                <TabPane tab={<span><Icon type="delete"/>Tab3</span>} key="3">3333</TabPane>
            </Tabs>
        </Card>      
        <Card title="tab循环页签">
            <Tabs 
            onChange={this.onchange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
            >
                {
                    this.state.panes.map((panel)=>{
                        return <TabPane tab={panel.title} key={panel.key}></TabPane>
                    })
                }
            </Tabs>
        </Card>
      </div>
    );
  }
}

export default Meaasge;
