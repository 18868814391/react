import React, { Component } from 'react';
import {Row, Col} from 'antd';
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'

class Header extends Component {
  state={}
  componentWillMount(){
    this.setState({
      userName:'SYF'
    })
    setInterval(()=>{
      let sysTime=Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    },1000)
    this.getWeatherAPIdata();
  }
  getWeatherAPIdata(){
    let city='hangzhou'
    axios.jsonp({
      url:'http://api.map.baidu.com/telematics/v3/weather?location='+city+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res)=>{
      if(res.status=='success'){
        let data=res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl:data.dayPictureUrl,
          weather:data.weather
        })
      }
    })
  }
  render() {
    return(
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎，{this.state.userName}</span>
            <a>退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">
              <img src={this.state.dayPictureUrl}/>
              {this.state.weather}
            </span>
          </Col>
        </Row>
      </div>  
    )
  }
}

export default Header;
