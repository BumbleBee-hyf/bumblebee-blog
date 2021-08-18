/*
* 文章列组件
* created：2021-8-9
* */
import React, {Component} from  'react';
import {List, Space} from "antd";
import './ArticleList.less'
export  default class ArticleList extends Component{
    render() {
        const TagList = (tag => {
          switch (tag) {
           case '前端':
               return '#f50';
           case '环境搭建':
               return '#2db7f5'
           case '解决问题':
               return '#87d068'
           case '生活感想':
               return '#108ee9'
          }
        });

        return(
            <>
                <h2 style={{background: TagList(this.props.tag)}}>{this.props.tag}</h2>
                <List className='ant-article'
                    itemLayout="vertical"
                    size="small"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 5,
                    }}
                    dataSource={this.props.articleList.filter(item => item.tag ===this.props.tag)}
                    renderItem={item => (
                        <>
                            <List.Item
                                key={item.title}
                            >
                                <List.Item.Meta
                                    title={
                                        <>
                                            <a href={'/#/articleDetail/' + item.id + '/'}>{item.title}</a>
                                            <div>{item.createTime}</div>
                                        </>
                                    }
                                />
                                {/*  <div dangerouslySetInnerHTML={{__html: item.html}}></div>*/}
                            </List.Item>
                        </>
                    )}
                />
            </>
        )
    }
}
