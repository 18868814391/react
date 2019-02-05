import React, { Component } from 'react';
import {Button,Card,Modal} from 'antd';
import './ui.less'

class Buttons extends Component {
	state={
		showModal1:false,
		showModal2:false,
		showModal3:false,
		showModal4:false,
	}
	handleOpean=(d)=>{
		this.setState({
			[d]:true,
		})
	}
	handleConfirm=(d)=>{
		Modal[d]({
			title:'确认',
			content:'2111111',
			onOk(){
				console.log('OK')
			},
			onCancel(){
				console.log('cancel')
			}
		})
	}
    render(){
        return(
            <div>
                <Card title="基础模态框">
									<Button type="primary" onClick={()=>this.handleOpean('showModal1')}>Open</Button>
									<Button type="primary" onClick={()=>this.handleOpean('showModal2')}>自定义页脚</Button>
									<Button type="primary" onClick={()=>this.handleOpean('showModal3')}>顶部20Px</Button>
									<Button type="primary" onClick={()=>this.handleOpean('showModal4')}>上下左右居中</Button>
								</Card>	
								<Card title="信息确认框">
									<Button type="primary" onClick={()=>this.handleConfirm('confirm')}>Confirm</Button>
									<Button type="primary" onClick={()=>this.handleConfirm('info')}>Info</Button>
									<Button type="primary" onClick={()=>this.handleConfirm('success')}>Success</Button>
									<Button type="primary" onClick={()=>this.handleConfirm('warning')}>Warning</Button>
								</Card>	
								<Modal
									title="React"
									visible={this.state.showModal1}
									onCancel={()=>{
										this.setState({
											showModal1:false
										})
									}}
								>
									<p>233333333333</p>
								</Modal>
								<Modal
									title="React"
									visible={this.state.showModal2}
									okText="下一步"
									cancelText="算了"
									onCancel={()=>{
										this.setState({
											showModal2:false
										})
									}}
								>
									<p>233333333333</p>
								</Modal>
								<Modal
									className="for20px"
									title="React"
									visible={this.state.showModal3}
									onCancel={()=>{
										this.setState({
											showModal3:false
										})
									}}
								>
									<p>233333333333</p>
								</Modal>		
								<Modal
									wrapClassName="forcenter"
									title="React"
									visible={this.state.showModal4}
									onCancel={()=>{
										this.setState({
											showModal4:false
										})
									}}
								>
									<p>233333333333</p>
								</Modal>														
            </div>    
        )
    }
}
export default Buttons;