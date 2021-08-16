import React, {Component} from  'react';
import ReactWEditor from 'wangeditor-for-react';
import {Button, message} from "antd";
import axios from "axios";
export  default class EditArticle extends Component{
    render() {
        const configOjb = {
            height: 700
        }
        let currentText = '';
        function createArticle() {
            const param = {
                LikeOut: 0,
                MessageOut: 0,
                title: 'test',
                html: currentText
            }
            axios.post('/api/article', param).then(
                (res) => {
                    message.success('创建文章成功！');
                }
            )
        }
        return(
            <>
                <ReactWEditor
                    config={configOjb}
                    defaultValue={'<h1>标题</h1>'}
                    linkImgCallback={(src,alt,href) => {
                        // 插入网络图片的回调事件
                        console.log('图片 src ', src)
                        console.log('图片文字说明',alt)
                        console.log('跳转链接',href)
                    }}
                    onlineVideoCallback={(video) => {
                        // 插入网络视频的回调事件
                        console.log('插入视频内容', video)
                    }}
                    onChange={(html) => {
                        console.log('onChange html:', html);
                        currentText = html;

                    }}
                    onBlur={(html) => {
                        console.log('onBlur html:', html);

                    }}
                    onFocus={(html) => {
                        console.log('onFocus html:', html)
                    }}
                />
                <Button type="primary" onClick={createArticle}>提交文章</Button>
            </>
        )
    }
}
