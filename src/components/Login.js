import React from 'react';
import { Link } from 'react-router-dom';

function Login ({onLogin}) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit (evt) {
    evt.preventDefault();
    onLogin({ email, password });
  }

  function handleEmailChange(input) {
    setEmail(input.target.value);
  }

  function handlePasswordChange(input) {
    setPassword(input.target.value);
  }

  return (
    <div className="sign-in">
      <h2 className="sign-in__title">Вход</h2>

      <form
        className="sign-in__form"
        name="loginForm"
        onSubmit={handleSubmit}
        action="#"
        noValidate
      >
        <input
          name="loginEmail"
          id="login-email"
          className="sign-in__input"
          placeholder="Email"
          minLength="2"
          maxLength="40"
          value={email}
          onChange={handleEmailChange}
          type="email"
          required
        />
        <input
          name="loginPassword"
          id="login-password"
          className="sign-in__input"
          placeholder="Пароль"
          minLength="2"
          maxLength="40"
          value={password}
          onChange={handlePasswordChange}
          type="password"
          required
        />
        <button className="sign-in__button" type="submit">Войти</button>
        <p className="sign-in__text">Ещё не зарегистрированы?<Link className="sign-in__link" to="/sign-up"> Регистрация</Link></p>
      </form>

    </div>
  )
}

export default Login;
