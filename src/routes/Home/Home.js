/*
* 首页
* created：2021-8-9
* */
import React, {Component} from  'react';
import {Tag, Divider, Row, Col, Calendar} from 'antd';
import {GithubOutlined, WeiboCircleOutlined} from '@ant-design/icons';
import ArticleList from "../../components/ArticleList/ArticleList";
import CarouselList from "../../components/CarouselList";
import Search from "antd/lib/input/Search";
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            articleList:[]
        }
    }
    init() {
        fetch("/api/article?_sort=createTime&_order=desc",{method:'GET'}).then(
            (res) => {
                console.log(res);
                res.json().then((data) => {
                    console.log(data);
                    this.setState({articleList: data})
                });
            }
        )
    }
    componentDidMount() {
        this.init();
    }
    goOutUrl = () => {
        window.open('https://github.com/BumbleBee-hyf');
    }
    goWeiBo = () => {
        window.open('https://weibo.com/2329535123/profile?topnav=1&wvr=6')
    }

    render(){
        const contentStyle = {
            height: '300px',
        };
        const onSearch = (value) => {
            if (value !== '') {
                const url = '/home/article?search=' + value;
                this.props.history.push(url);
            }
        }
        return (
            <>
                <Row justify="space-between">
                    <Col span={5}>
                        <ArticleList articleList={this.state.articleList} tag={'前端'} />
                    </Col>
                    <Col span={5}>
                        <ArticleList articleList={this.state.articleList} tag={'环境搭建'} />
                    </Col>
                    <Col span={5}>
                        <CarouselList currentStyle={contentStyle}/>
                    </Col>
                    <Col span={5}>
                        <Divider orientation="left">检索</Divider>
                        <div>
                            <Search placeholder="请输入文章标题" allowClear onSearch={onSearch} style={{ width: 300 }} />
                        </div>
                        <Divider orientation="left">文章分类</Divider>
                        <div>
                            <Tag color="#f50">
                                <a href={'/#/home/article?tag=前端'}>前端</a>
                            </Tag>
                            <Tag color="#2db7f5">
                                <a href={'/#/home/article?tag=环境搭建'}>环境搭建</a>
                            </Tag>
                            <Tag color="#87d068">
                                <a href={'/#/home/article?tag=解决问题'}>解决问题</a>
                            </Tag>
                            <Tag color="#108ee9">
                                <a href={'/#/home/article?tag=生活感想'}>生活感想</a>
                            </Tag>
                        </div>
                        <Divider orientation="left">我的社区</Divider>
                        <div>
                            <Tag icon={<GithubOutlined />} color="#454545" onClick={this.goOutUrl}>
                                Github
                            </Tag>
                            <Tag icon={ <WeiboCircleOutlined />} color="#eeca55" onClick={this.goWeiBo}>
                                Weibo
                            </Tag>

                        </div>
                    </Col>
                </Row>
                <Row justify="space-between">
                    <Col span={5}>
                        <ArticleList articleList={this.state.articleList} tag={'解决问题'} />
                    </Col>
                    <Col span={5}>
                        <ArticleList articleList={this.state.articleList} tag={'生活感想'} />
                    </Col>
                    <Col span={5}>
                        <Calendar fullscreen={false}/>
                    </Col>
                    <Col span={5}>
                    </Col>
                </Row>
            </>
        )

    }
}
