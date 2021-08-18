import React, {Component} from  'react';
import axios from "axios";
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import { ArrowLeftOutlined } from '@ant-design/icons';
import './ArticleDetail.less'
import ArticleCommentList from "../../components/ArticleCommentList";
import {Divider} from "antd";
export  default class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleDetail: {},
        }

    }

    init() {
        axios.get("/api/article?id=" + window.location.hash.split('/')[2], null).then(
            (res) => {
                this.setState({articleDetail: res.data[0]});
            });
    }
    backUrl= () => {
      window.history.back();
    }
    componentDidMount() {
        this.init();
    }

    render() {
        const styleContent = {
            overflow: 'auto',
            height: window.innerHeight - 64 + 'px',
            'padding-top': '20px',
            'padding-left': '20%',
            'padding-right': '20%'
        }
        return (
            <>
                <Layout>
                    <Header>
                        <div onClick={this.backUrl}>
                            <ArrowLeftOutlined />
                        </div>
                        <div>{this.state.articleDetail.title}</div>
                        <div>{this.state.articleDetail.createTime}</div>
                    </Header>
                    <Content style={styleContent}>
                        <div class='articleStyle' dangerouslySetInnerHTML={{__html: this.state.articleDetail.html}}></div>
                        <Divider />
                        <ArticleCommentList/>
                    </Content>
                </Layout>


            </>

        )
    }
}
