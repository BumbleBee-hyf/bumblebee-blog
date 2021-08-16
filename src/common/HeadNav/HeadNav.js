/*
* 头部组件
* created：2021-8-9
* */
import React,{Component} from 'react';
import {Menu, Avatar } from 'antd'
import './HeadNav.less'
import {Link} from "react-router-dom";
export default class HeadNav extends Component {
    state = {
        current: 'home',
        currentName: localStorage.getItem('username')
    }
    handleClick=(e)=>{ //点击事件
        this.setState({current:e.key});
    }
    // 初始化url
    init() {
        const hash = window.location.hash.split('/');
        const key = hash[hash.length -1];
        this.setState({current: key});
    }
    componentDidMount() {
        this.init();
    }
    clearUser() {
        localStorage.clear();
    }
    render(){
        return (
            <div id="HeadNav">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                        <Avatar size="large" src="https://bumblebee.zone/download/bumblebee_logo.jpg" />
                        <span>Bumblebee.zone</span>
                    </div>
                    <div className="nav-list-wrap">
                        <Menu
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            onClick={this.handleClick}
                        >
                            <Menu.Item key="home" >
                                <Link  to="/home">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link  to="/home/about">关于我</Link>
                            </Menu.Item>
                            <Menu.Item key="article">
                                <Link to="/home/article">文章分享</Link>
                            </Menu.Item>
                            <Menu.Item key="resource">
                                <Link to="/home/resource">资源共享</Link>
                            </Menu.Item>
                            <Menu.Item key="loginOut">
                                <Link onClick={this.clearUser} to="/">退出登录</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div className="nav-list-user">{'当前用户：' + (this.state.currentName || '游客')}</div>
                </div>
            </div>
        )
    }

}
