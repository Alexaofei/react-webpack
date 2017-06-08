import React,{Component} from 'react';
import ReactDom from 'react-dom';
import aofei from './module1.js';

import './style.styl';
import './style.scss';


class People extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 1
        }
    }

    static deafultProps = {
        name : "a"
    };

    click(){
        this.setState({
            count : ++this.state.count
        });
        this.props.name = "aofei";
    }

    render(){
        console.log(this.state);
        let {a} = this.state;
        return <div>
            <span onClick={this.click.bind(this)}>{this.props.name}{this.state.count}</span>
        </div>
    }
}

class Controler extends React.Component{
    render(){
        return <div></div>
    }
}

ReactDom.render(
    <div>
        <People/>
    </div>,
    document.getElementById("main")
);