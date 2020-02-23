import React from 'react'
import Login from "./Login";
import HomePage from "./HomePage";

export default class Home extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            showPage: false,
            showLogIn: true
        };
        this.changeHomePage = this.changeHomePage.bind(this);
        this.changeLogin = this.changeLogin.bind(this);
    }

    changeHomePage(){
        this.setState({
            showPage: true,
            showLogIn: false
        })
    }
    changeLogin(){
        this.setState({
            showPage: false,
            showLogIn: true
        })
    }

    render() {
        return (
            <div>
                    {this.state.showLogIn && <Login changeHomePage = {this.changeHomePage} />}
                    {this.state.showPage && <HomePage changeLogIn = {this.changeLogin} />}
            </div>
        );
    }

}