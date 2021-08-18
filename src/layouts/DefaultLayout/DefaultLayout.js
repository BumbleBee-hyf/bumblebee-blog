/*
* 根页面
* created：2021-8-9
* */
import React, {Component} from  'react';
import HeadNav from '../../common/HeadNav/HeadNav'
import './DefaultLayout.less'
import {Route} from 'react-router-dom'
import Home from '../../routes/Home/Home'
import About from '../../routes/About/About'
import Article from '../../routes/Article/Article'
import Resource from '../../routes/Resource/Resource'
import EditArticle from "../../routes/EditArticle/EditArticle";
import {Footer} from "antd/es/layout/layout";
export default class DefaultLayout extends Component{
    state = {
        currentUrl:''
    }
    componentDidMount() {
        this.props.history.listen(route => {
            console.log(route);
            const urlList = route.pathname.split('/');
            this.setState({currentUrl: urlList[urlList.length -1]})
        })
    }
    render() {
        return (
            <div id='DefaultLayout'>
                <HeadNav id='HeadNav' current={this.state.currentUrl}/>
                <div className='content-wrap'>
                    <Route path={this.props.match.url + '/'} component={Home} exact/>
                    <Route path={this.props.match.url + '/about'} component={About}/>
                    <Route path={this.props.match.url + '/article'} component={Article}/>
                    <Route path={this.props.match.url + '/resource'} component={Resource}/>
                    <Route path={this.props.match.url + '/editArticle'} component={EditArticle}/>
                </div>
                <Footer>
                    <li>Designed & Powerd by bumblebee-hyf</li>
                    <li> Copyright© 2021-2022 黄义峰-大黄蜂</li>
                    <a href='https://beian.miit.gov.cn/#/Integrated/index'>粤ICP备2021075878号</a>
                </Footer>
            </div>
        )
    }
}
