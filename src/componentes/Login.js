import React from 'react'
import '../css/Login.css'
import {login} from "./api";


export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        }
        this.borrarDatos = this.borrarDatos.bind(this);
        this.enviarDatos = this.enviarDatos.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updateContraseña = this.updateContraseña.bind(this);
        this.checkRes = this.checkRes.bind(this);
        this.showError = this.showError.bind(this);
    }
    showError(e){
        this.setState({
            error: 'Contraseña o usuarie incorrectos'
        })
    }
    checkRes(res){
        this.props.changeHomePage();
        this.borrarDatos()
    }
    updateContraseña(event){
        this.setState({
            password: event.target.value
        })
    }
    updateUsername(event){
        this.setState({
            username: event.target.value
        })
    }
    enviarDatos(){
        login({
            usuarie: this.state.username,
            password: this.state.password
        }).then(res => this.checkRes(res))
            .catch(e => this.showError(e))

    }
    borrarDatos(){
        this.setState({
            username: '',
            password: '',
            error: ''
        })
    }
    render() {
        return (
            <div className={"login-container"}>
                <div>
                <input type="text" value={this.state.username} placeholder={"Nombre usuario"} onChange={this.updateUsername}/>
                </div>
                <div>
                <input type="password" value={this.state.password} placeholder={"Contraseña"} onChange={this.updateContraseña}/>
                </div>
                {this.state.error}
                <div className={"button-container"}>
                <input type="button" value={"Enviar"} onClick={this.enviarDatos}/>
                <input type="button" value={"Cancelar"} onClick={this.borrarDatos}/>
                <div>

                </div>
                </div>

            </div>
        );
    }

}