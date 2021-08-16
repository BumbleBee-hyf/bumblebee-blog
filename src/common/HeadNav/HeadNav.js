/*
* 头部组件
* created：2021-8-9
* */
import React,{Component} from 'react';
import {Menu, Dropdown, Avatar } from 'antd'
import './HeadNav.less'
import {Link} from "react-router-dom";
import { EditOutlined, UserOutlined } from '@ant-design/icons';
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
    handleMenuClick(e) {
        localStorage.clear();
    }
    classStyle = {
      display: 'none'
    }
    menuPower = (
        <Menu>
            <Menu.Item key="1" icon={<EditOutlined />} >
                <a href={window.location.href+ "/EditArticle"}>写文章</a>
            </Menu.Item>
            <Menu.Item  onClick={this.handleMenuClick} key="2" icon={<UserOutlined />} >
               <a href="/">退出登录</a>
            </Menu.Item>
        </Menu>
    );
    menu = (
        <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="2" icon={<UserOutlined />} >
                <a href="/">退出登录</a>
            </Menu.Item>
        </Menu>
    );
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
                         {/*   <Menu.Item key="loginOut">
                                <Link onClick={this.clearUser} to="/">退出登录</Link>
                            </Menu.Item>*/}
                        </Menu>
                    </div>
                    <div className="nav-list-user">
                        <Dropdown.Button overlay={localStorage.getItem('username') === '黄义峰' ? this.menuPower : this.menu} placement="bottomCenter" icon={<UserOutlined />}>
                            {(this.state.currentName || '游客')}
                        </Dropdown.Button>
                    </div>
                </div>
            </div>
        )
    }

}
