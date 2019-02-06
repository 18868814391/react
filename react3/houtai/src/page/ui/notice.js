import React, { Component } from 'react';
import {Button,Card, notification} from 'antd';
import './ui.less'

class Notice extends Component {
  state={

  }
	openOne=(d,t)=>{
		if(t){
			notification.config({
				placement:t
			})		
		}
			notification[d]({
				message:'233',
				description:'haohaohaohao',
			})				
	}
  render() {  
    return (
      <div> 
        <Card title="提醒">
					<Button type="primary" onClick={()=>this.openOne('success')}>success</Button>
					<Button type="primary" onClick={()=>this.openOne('info')}>Info</Button>
					<Button type="primary" onClick={()=>this.openOne('warning')}>warning</Button>
					<Button type="primary" onClick={()=>this.openOne('error')}>error</Button>
        </Card>  
				<Card title="提醒">
					<Button type="primary" onClick={()=>this.openOne('success','topLeft')}>success</Button>
					<Button type="primary" onClick={()=>this.openOne('info','topRight')}>Info</Button>
					<Button type="primary" onClick={()=>this.openOne('warning','bottomLeft')}>warning</Button>
					<Button type="primary" onClick={()=>this.openOne('error','bottomRight')}>error</Button>
        </Card>       
      </div>

    );
  }
}

export default Notice;
