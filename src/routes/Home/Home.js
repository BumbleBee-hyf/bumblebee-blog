/*
* 首页
* created：2021-8-9
* */
import React, {Component} from  'react';
import {Tag, Divider, Row, Col} from 'antd';
import {GithubOutlined, WeiboCircleOutlined} from '@ant-design/icons';
import ArticleList from "../../components/ArticleList";
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            articleList:[]
        }
    }
    init() {
        fetch("/api/article",{method:'GET'}).then(
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
    goOutUrl() {
        window.open('https://github.com/BumbleBee-hyf');
    }
    goWeiBo() {
        window.open('https://weibo.com/2329535123/profile?topnav=1&wvr=6')
    }
    render(){
        return (
            <Row>
                <Col span={18} push={6}>
                    <ArticleList articleList={this.state.articleList}/>
                </Col>
                <Col span={6} pull={18}>
                    <Divider orientation="left">Presets</Divider>
                    <div>
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="volcano">volcano</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="gold">gold</Tag>
                        <Tag color="lime">lime</Tag>
                    </div>
                    <Divider orientation="left">Custom</Divider>
                    <div>
                        <Tag color="#f50">#f50</Tag>
                        <Tag color="#2db7f5">#2db7f5</Tag>
                        <Tag color="#87d068">#87d068</Tag>
                        <Tag color="#108ee9">#108ee9</Tag>
                    </div>
                    <Divider orientation="left">Custom</Divider>
                    <div>
                        <Tag color="#f50">#f50</Tag>
                        <Tag color="#2db7f5">#2db7f5</Tag>
                        <Tag color="#87d068">#87d068</Tag>
                        <Tag color="#108ee9">#108ee9</Tag>
                    </div>
                    <Divider orientation="left">Custom</Divider>
                    <div>
                        <Tag color="#f50">#f50</Tag>
                        <Tag color="#2db7f5">#2db7f5</Tag>
                        <Tag color="#87d068">#87d068</Tag>
                        <Tag color="#108ee9">#108ee9</Tag>
                    </div><Divider orientation="left">Custom</Divider>
                    <div>
                        <Tag color="#f50">#f50</Tag>
                        <Tag color="#2db7f5">#2db7f5</Tag>
                        <Tag color="#87d068">#87d068</Tag>
                        <Tag color="#108ee9">#108ee9</Tag>
                    </div>
                    <Divider orientation="left">Custom</Divider>
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

        )

    }
}
