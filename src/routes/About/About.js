/*
* 关于自己
* created：2021-8-9
* */
import React, {Component} from  'react';
import { Row, Col } from 'antd';
import CarouselList from "../../components/CarouselList";
import UserInfo from "../../components/UserInfo";
export  default class About extends Component{
    render() {
        const contentStyle = {
            height: '750px',
        };
        return(
            <div id='about'>
                <Row  gutter={[8, 16]}>
                    <Col span={12}>
                       <CarouselList currentStyle={contentStyle}/>
                    </Col>
                    <Col span={12}>
                        <UserInfo/>
                    </Col>
                </Row>
            </div>
        )
    }
}
