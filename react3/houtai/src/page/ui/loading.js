import React, { Component } from 'react';
import {Button,Card,Spin,Icon,Alert} from 'antd';
import './ui.less'

class Buttons extends Component {
  state={

  }

  render() {  
		const icon=<Icon type="plus" style={{fontSize:'30px'}}></Icon> 
    return (
      <div> 
        <Card title="Spin用法">
          <Spin size="small"/>&nbsp;
					<Spin size='large'/>&nbsp;
					<Spin indicator={icon}/>&nbsp;
        </Card>  
				<Card title="内容遮罩">
					<Alert
						message="233"
						description="welcome to react"
						type="info"
					/>
					<Spin tip="加载中...">
						<Alert
							message="233"
							description="welcome to react"
							type="warning"
						/>						
					</Spin>	
				</Card>              
      </div>

    );
  }
}

export default Buttons;
