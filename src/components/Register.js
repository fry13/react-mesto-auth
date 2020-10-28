import React from 'react';
import { Link } from 'react-router-dom';

function Registration ({onRegistration}) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit (evt) {
    evt.preventDefault();
    onRegistration({ email, password });
  }

  function handleEmailChange(input) {
    setEmail(input.target.value);
  }

  function handlePasswordChange(input) {
    setPassword(input.target.value);
  }

  return (
    <div className="sign-in">
      <h2 className="sign-in__title">Регистрация</h2>

      <form
        name="registrationForm"
        className="sign-in__form"
        onSubmit={handleSubmit}
        action="#"
        noValidate
      >
        <input
          name="registrationEmail"
          id="registration-email"
          className="sign-in__input"
          placeholder="E-mail"
          minLength="2"
          maxLength="40"
          value={email}
          onChange={handleEmailChange}
          type="email"
          required
        />
        <input
          name="registrationPassword"
          id="registration-password"
          className="sign-in__input"
          placeholder="Пароль"
          minLength="2"
          maxLength="40"
          value={password}
          onChange={handlePasswordChange}
          type="password"
          required
        />
        <button className="sign-in__button" type="submit">Зарегистрироваться</button>
        <p className="sign-in__text">Уже зарегистрированы?<Link className="sign-in__link" to="/sign-in"> Войти</Link></p>
      </form>

    </div>
  )
}

export default Registration;
