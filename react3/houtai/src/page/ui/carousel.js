import React, { Component } from 'react';
import {Card,Carousel} from 'antd';
import './ui.less'

class qqq extends Component {
  state={

  }
  render() {  
    return (
      <div> 
        <Card title="轮播">
            <Carousel autoplay effect="fade">
                <div><img  className="banner"src="/gallery/1.jpg"/></div>
                <div><img  className="banner"src="/gallery/2.jpg"/></div>
                <div><img  className="banner"src="/gallery/3.jpg"/></div>
                <div><img  className="banner"src="/gallery/4.jpg"/></div>
            </Carousel>       
        </Card>     
      </div>

    );
  }
}

export default qqq;
