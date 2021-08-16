/*
* 文章列组件
* created：2021-8-9
* */
import React, {Component} from  'react';
import {List, Space} from "antd";
import {LikeOutlined, MessageOutlined, StarOutlined} from "@ant-design/icons";
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
                size="large"
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
                            actions={[
                                /*  <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,*/
                                <IconText icon={LikeOutlined} text={item.LikeOut} key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text={item.MessageOut} key="list-vertical-message" />,
                            ]}
                            extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
                        >
                            <List.Item.Meta
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            <div dangerouslySetInnerHTML={{__html: item.html}}></div>
                        </List.Item>
                    </>
                )}
            />
        )
    }
}
