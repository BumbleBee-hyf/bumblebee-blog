/*
* 资源共享
* created：2021-8-9
* */
import React, {Component} from  'react';
import ArticleList from "../../components/ArticleList";
export  default class Resource extends Component{
    constructor(props){
        super(props);
        this.state = {
            articleList:[]
        }
    }
    init() {
        fetch("/api/demo",{method:'GET'}).then(
            (res) => {
                console.log(res);
                res.json().then((data) => {
                    console.log(data);
                    this.setState({articleList: data})
                });
            }
        )
    }
    componentDidMount() {
        this.init();
    }
    render() {
        return(
            <ArticleList articleList={this.state.articleList}/>
        )
    }
}
