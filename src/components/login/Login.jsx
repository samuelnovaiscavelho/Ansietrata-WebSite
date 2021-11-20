import React from "react";
//import loginImg from "../../img/login.svg";


export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Nome do Usuário</label>
              <input type="text" name="username" placeholder="nome do usuário" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" placeholder="senha" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}