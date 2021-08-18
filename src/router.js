import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import ArticleDetail from './routes/ArticleDetail/ArticleDetail';
import LoginUser from './layouts/LoginUser/LoginUser';
export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={LoginUser} exact/>
                        <Route path="/home" component={DefaultLayout}/>
                        <Route path="/articleDetail/:id" component={ArticleDetail}/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
