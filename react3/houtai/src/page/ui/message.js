import React, { Component } from 'react';
import {Button,Card,Spin,Icon,Alert, message} from 'antd';
import './ui.less'

class Meaasge extends Component {
  state={

  }
  showmsg=(d)=>{
    message[d]("恭喜你2333")
  }
  render() {  
    return (
      <div> 
         <Card title="提示框">
            <Button type="primary" onClick={()=>this.showmsg('success')}>success</Button>
            <Button type="primary" onClick={()=>this.showmsg('info')}>info</Button>
            <Button type="primary" onClick={()=>this.showmsg('warning')}>warning</Button>
            <Button type="primary" onClick={()=>this.showmsg('error')}>error</Button>
            <Button type="primary" onClick={()=>this.showmsg('loading')}>loading</Button>
         </Card>      
      </div>

    );
  }
}

export default Meaasge;
