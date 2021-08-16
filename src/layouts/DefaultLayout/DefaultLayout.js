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
export default class DefaultLayout extends Component{
    render() {
        return (
            <div id='DefaultLayout'>
                <HeadNav id='HeadNav'/>
                <div className='content-wrap'>
                    <Route path={this.props.match.url + '/'} component={Home} exact/>
                    <Route path={this.props.match.url + '/about'} component={About}/>
                    <Route path={this.props.match.url + '/article'} component={Article}/>
                    <Route path={this.props.match.url + '/resource'} component={Resource}/>
                    <Route path={this.props.match.url + '/editArticle'} component={EditArticle}/>
                </div>
            </div>
        )
    }
}
