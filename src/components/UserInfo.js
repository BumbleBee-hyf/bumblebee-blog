/*
* 作者介绍
* created：2021-8-9
* */
import React, {Component} from  'react';
import {Descriptions, Image} from "antd";
export  default class UserInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {},
            descriptionList: []
        }

    }
    init(){
        fetch("/api/myAbout",{method:'GET'}).then(
            (res) => {
                res.json().then((data) => {
                    this.setState({userInfo: data})
                    this.setState({descriptionList: data.descriptionList})
                    console.log(this.state.userInfo);
                });
            }
        )
    }
    componentDidMount() {
        this.init();
    }
    render() {
        return(
            <>
                <Image
                    width={200}
                    src={this.state['userInfo'].image}
                />
              <Descriptions title={this.state['userInfo'].name}>
                        {
                            this.state.descriptionList.map(item => {
                                return <Descriptions.Item label={item.label}>{item.value}</Descriptions.Item>
                            })
                        }
                </Descriptions>
            </>
        )
    }
}
