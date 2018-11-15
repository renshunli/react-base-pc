import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import Loadable from 'react-loadable';
import HomePage from './view/homePage/HomePage.js';
import ListPage from './view/listPage/ListPage.js';
import Nav from './component/nav/Nav.js';
import { Button } from 'antd';
import './assets/css/common.css';
import './util/animation.js';
import './app.scss';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';

// let TouchMove = Loadable({
//     loader: () => import(/* webpackChunkName: "TouchMove" */'./view/touchMove/TouchMove.js'),
//     loading: () => (<div>loading</div>)
// })


let list = [{text: "首页",url: 'homepage'},{text: "列表页",url: 'listpage'}]

class App extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props)
        return (
            <div className="App">
                <div className="nav-barr">
                    <Nav  list={list} customEl={<div>自定义插槽组件</div>}>
                        <div>插槽类似vue - slot</div>
                        <DatePicker></DatePicker>
                    </Nav>
                </div>
                <Route path="/" exact history={this.props.history} component={HomePage}></Route>
                <Route path="/homepage" component={HomePage}></Route>
                <Route path="/listpage" component={ListPage}></Route>
                <Button>按钮</Button>
            </div>
        );
    }
}

export default App;
