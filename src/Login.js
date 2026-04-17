import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      mensagem: ''
    };

    this.mudaEmail = this.mudaEmail.bind(this);
    this.mudaSenha = this.mudaSenha.bind(this);
    this.acessar = this.acessar.bind(this);
  }

  mudaEmail(e) {
    this.setState({ email: e.target.value });
  }

  mudaSenha(e) {
    this.setState({ senha: e.target.value });
  }

  acessar() {
    const { email, senha } = this.state;

    if (email === "eduardo.lino@pucpr.br" && senha === "123456") {
      this.setState({ mensagem: "Acessado com sucesso!" });
    } else {
      this.setState({ mensagem: "Usuário ou senha incorretos" });
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Digite seu email"
          onChange={this.mudaEmail}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          onChange={this.mudaSenha}
        />

        <button onClick={this.acessar}>
          Acessar
        </button>

        <label>{this.state.mensagem}</label>
      </div>
    );
  }
}

export default Login;