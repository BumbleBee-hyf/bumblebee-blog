/*
* 轮播图片组件
* created：2021-8-9
* */
import React, {Component} from  'react';
import {Carousel} from "antd";
export  default class CarouselList extends Component{
    // 切换
    onChange() {

    }
    render() {
        // 背景样式
        const contentStyle = {
            height: '850px',
        };
        // 图片样式
        const imgStyle ={
            'object-fit':'cover',
            width: '100%',
            height: '100%'
        }
        return(
            <Carousel afterChange={this.onChange()} autoplay>
                <div>
                    <h3 style={contentStyle}>  <img style={imgStyle}
                                                    src="https://bumblebee.zone/download/Carousel4.jpg"
                    /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}>  <img style={imgStyle}
                                                    src="https://bumblebee.zone/download/Carousel2.jpg"
                    /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}>  <img style={imgStyle}
                                                    src="https://bumblebee.zone/download/Carousel3.jpg"
                    /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}>  <img style={imgStyle}
                                                    src="https://bumblebee.zone/download/Carousel1.jpg"
                    /></h3>
                </div>
            </Carousel>
        )
    }
}
