import React, {createElement, Component} from  'react';
import {Comment, Form, Button, Tooltip, Avatar, List, Input} from "antd";
import moment from 'moment';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                提交评论
            </Button>
        </Form.Item>
    </>
);

export  default class ArticleCommentList extends Component{
    state = {
        comments: [],
        submitting: false,
        value: '',
    };

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    ...this.state.comments,
                    {
                        author: 'Han Solo',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                ],
            });
        }, 1000);
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { comments, submitting, value } = this.state;
        const avatarStyle = {
            height: '50px',
            'line-height': '50px',
            'background': 'cornflowerblue',
            'color': '#fff',
            'width': '50px',
            'border-radius': '30px',
            'font-size': '12px',
        }
        const sumbitComment =  <Comment
            avatar={
                <div style={avatarStyle}>{localStorage.getItem('username')}</div>
            }
            content={
                <Editor
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    submitting={submitting}
                    value={value}
                />
            }
        />
        return (
            <>
                {comments.length > 0 && <CommentList comments={comments} />}
                {localStorage.getItem('username') ? sumbitComment: null}
            </>
        );
    }
}
