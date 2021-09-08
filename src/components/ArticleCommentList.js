import React, {createElement, Component} from  'react';
import {Comment, Form, Button, Tooltip, Avatar, List, Input, message} from "antd";
import moment from 'moment';
import axios from "axios";

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
        const param = {
            id: this.props.id,
            comments: [
                ...this.props.comments,
                {
                    author: 'Han Solo',
                    content: <pre>{this.state.value}</pre>,
                    datetime: moment().fromNow(),
                },
            ]
        }
        axios.put('/api/article/'+ param.id, param).then(
            (res) => {
                this.setState({
                    submitting: false,
                    value: '',
                    comments: [
                        ...this.props.comments,
                        {
                            author: 'Han Solo',
                            content: <pre>{this.state.value}</pre>,
                            datetime: moment().fromNow(),
                        },
                    ],
                });
                message.success('评论文章成功！');
            }
        )
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { submitting, value } = this.state;
        const comments = this.props.comments;
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
