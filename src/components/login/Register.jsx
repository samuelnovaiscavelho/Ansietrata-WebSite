import React from "react";
//import loginImg from "../../components/login.svg";


export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Cadastro</div>
        <div className="content">
          <div className="image">
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Nome do Usuário</label>
              <input type="text" name="username" placeholder="nome do usuário" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" placeholder="e-mail" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input type="text" name="password" placeholder="senha" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Cadastro
          </button>
        </div>
      </div>
    );
  }
}