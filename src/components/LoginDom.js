/*
* 登录模块
* created：2021-8-9
* */
import React, {Component} from  'react';
import {Button, Checkbox, Form, Input, message} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
export  default class LoginDom extends Component{
    render() {
        // 提交form
        const onFinish = (values) => {
            // 校验
            const userObj = this.props.userList.filter(user => (user.account === values.account && user.password === values.password))[0];
            const num = this.props.userList.filter(user => (user.account === values.account && user.password === values.password)).length;
            if (num) {
                localStorage.setItem('username', userObj.username)
                this.props.callback('success ');
            } else {
                message.error('账户密码不正确或者未注册');
            }
        };
        // 像父组件发消息
        const changeFlag = (value) => {
            this.props.changeFlag('register')
        }
        // 游客登录
        const tourist = () => {
            this.props.callback('success ');
        }
        const styleColor = {
            color: '#fff',
            'margin-right': '8px'
        }
        return  <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="account"
                rules={[{ required: true, message: '请输入登录账户!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账户" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住密码</Checkbox>
                </Form.Item>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>
                <span style={styleColor}>Or</span>
                <Button type="primary"  onClick={tourist}>游客登录</Button>
                <span style={styleColor}>Or</span> <Button type="primary" onClick={changeFlag}>注册用户!</Button>
            </Form.Item>
        </Form>
    }
}
