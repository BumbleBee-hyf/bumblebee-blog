import React, {Component} from  'react';
import ReactWEditor from 'wangeditor-for-react';
import {Button, message, Input, Select } from "antd";
import moment from 'moment';
import 'moment/locale/zh-cn';
import axios from "axios";
import {Option} from "antd/es/mentions";
export  default class EditArticle extends Component{
    render() {
        const configOjb = {
            height: 600
        }
        let articleObj = {
            html: '',
            title: '',
            tag: '前端'
        }
        const provinceData = ['前端','环境搭建','解决问题','生活感想'];
        const handleProvinceChange = value => {
            articleObj.tag = value;
        }
        const createArticle = () =>{
            const param = {
                LikeOut: 0,
                MessageOut: 0,
                title: articleObj.title,
                html: articleObj.html,
                createTime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
                tag: articleObj.tag
            }
            axios.post('/api/article', param).then(
                (res) => {
                    message.success('创建文章成功！');
                }
            )
        }
        return(
            <>
                <Input placeholder='请输入标题' style={{ width: '90%' }} allowClear  onChange={(e) => {
                    articleObj.title = e.target.value;
                }}/>
                <Select defaultValue={provinceData[0]} style={{ width: '10%' }} onChange={handleProvinceChange}>
                    {provinceData.map(province => (
                        <Option key={province}>{province}</Option>
                    ))}
                </Select>
                <ReactWEditor
                    config={configOjb}
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


                    }}
                    onBlur={(html) => {
                        console.log('onBlur html:', html);
                        articleObj.html = html;
                    }}
                    onFocus={(html) => {
                        console.log('onFocus html:', html)
                    }}
                />
                <Button type="primary"  onClick={createArticle}>提交文章</Button>
            </>
        )
    }
}
