import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            nome: "",
            sobrenome: ""
        }

        this.state = this.initialState;
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        })
    };

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    };

    render() {
        const { nome, sobrenome } = this.state;

        return (
            <form>
                <label htmlFor="name">Nome</label>
                <input 
                    type="text"
                    name="nome"
                    id="nome"
                    value={nome}
                    onChange={this.handleChange}
                />
                <label htmlFor="sobrenome">Sobrenome</label>
                <input 
                    type="text"
                    name="sobrenome"
                    id="sobrenome"
                    value={sobrenome}
                    onChange={this.handleChange}
                />
                <input 
                    type="button" 
                    value="submit" 
                    onClick={this.submitForm} 
                />
            </form>
        );
    };
};