/*
* 文章列组件
* created：2021-8-9
* */
import React, {Component} from  'react';
import {List, Space} from "antd";
import './ArticleList.less'
export  default class ArticleList extends Component{
    render() {
        const IconText = ({ icon, text }) => (
            <Space>
                {React.createElement(icon)}
                {text}
            </Space>
        );
        return(
            <List
                itemLayout="vertical"
                size="small"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 4,
                }}
                dataSource={this.props.articleList}
                renderItem={item => (
                    <>
                        <List.Item
                            key={item.title}
                        >
                            <List.Item.Meta
                                title={
                                    <>
                                        <a href={item.href}>{item.title}</a>
                                        <div>{item.createTime}</div>
                                    </>
                                }
                            />
                          {/*  <div dangerouslySetInnerHTML={{__html: item.html}}></div>*/}
                        </List.Item>
                    </>
                )}
            />
        )
    }
}
