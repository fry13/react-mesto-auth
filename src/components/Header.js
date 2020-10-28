import React from 'react';
import logo from '../images/logo.svg';
import { withRouter, Link } from "react-router-dom";

function Header({email, onLogout, isLoggedIn, location}) {
  return(
    <header className="header">
      <a href="/"><img src={logo} alt="Логотип Место" className="header__logo" /></a>
      <div>
        <span className="header__email">{email}</span>
        {
          isLoggedIn && <Link
            to={'/sign-in'}
            className="header__link"
            onClick={onLogout}
        >
          Выход
        </Link>
        }
        {
          location.pathname === '/sign-up' && <Link
            to={'/sign-in'}
            className="header__link"
        >
          Войти
        </Link>
        }
        {
          location.pathname === '/sign-in' && <Link
            to={'/sign-up'}
            className="header__link"
          >
            Регистрация
          </Link>
        }
      </div>
    </header>
  );
}

export default withRouter(Header);
