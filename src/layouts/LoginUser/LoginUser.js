/*
* 用户登录
* created：2021-8-9
* */
import React, {Component} from  'react';
import './LoginUser.less'
import LoginDom from '../../components/LoginDom'
import RegisterDom from "../../components/RegisterDom";
import {Footer} from "antd/es/layout/layout";
export default class LoginUser extends Component {
    state = {
        userList: [],
        flag: 'login'
    }

    init() {
        fetch("/api/users", {method: 'GET'}).then(
            (res) => {
                res.json().then((data) => {
                    this.setState({userList: data})
                });
            }
        )
    }

    componentWillMount () {
        this.init();
    }
    callback= (msg) => {
        this.props.history.push("/home")
    }
    changeFlag = (msg) => {
        this.setState({flag: msg});
    }
    render() {
        const heightStyle = {
            height: document.documentElement.clientHeight,
            width: document.documentElement.clientWidth
        }
        const backgroundStyle = {
            background: '#ffffff96'
        }
        return (
            <>
                <div className='LoginUser' style={heightStyle}>
                    <div className='logoStyle'>Bumblebee.zone</div>
                    {this.state.flag === 'login' ? <LoginDom userList = {this.state.userList} callback={this.callback} changeFlag={this.changeFlag}/> : <RegisterDom userList = {this.state.userList} callback={this.callback} changeFlag={this.changeFlag}/>}
                </div>
                <Footer style={backgroundStyle}>
                    <li>Designed & Powerd by bumblebee-hyf</li>
                    <li> Copyright© 2021-2022 黄义峰-大黄蜂</li>
                    <a href='https://beian.miit.gov.cn/#/Integrated/index'>粤ICP备2021075878号</a>
                </Footer>
            </>
        )
    }
}
