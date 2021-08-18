/*
* 注册模块
* created：2021-8-9
* */
import React, {Component} from  'react';
import {Button, Form, Input, message} from "antd";
import axios from 'axios'
export  default class RegisterDom extends Component {
    // 注册用户
    registerData(value) {
        const body = {
            account: value.account,
            username: value.username,
            password: value.password
        }
        axios.post('/api/users', body).then(
            (res) => {
                message.success('注册成功！');
            }
        )
    }

    render() {
        // 提交表单
        const onFinish = (values) => {
            const num = this.props.userList.filter(user => user.account === values.account).length;
            if (!num && values.passwordNew === values.password) {
                this.registerData(values);
                this.props.callback('success');
            } else {
                message.error('数据有问题！');
            }
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        const styleColor = {
            color: '#fff'
        }
        // 像父组件发消息
        const changeFlag = (value) => {
            this.props.changeFlag('login')
        }
        return (
            <Form
                name="basic"
                className="register-form"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="登录账户"
                    name="account"
                    rules={[{required: true, min: 5, max: 20}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{required: true, max: 4}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{required: true, min: 8, max: 20}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    label="重复密码"
                    name="passwordNew"
                    rules={[{required: true, message: '请输入重复密码!'}]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                    <span style={styleColor}>Or</span> <a onClick={changeFlag}>登录!</a>
                </Form.Item>
            </Form>
        );
    }
}
