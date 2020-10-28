import {identity} from './utils'

class Api {
  constructor({token, url}) {
    //this._token = token;
    this._url = url;
  }

// response handlers

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      console.error(`Oops! Error: ${res.status}`)
      //return Promise.reject(`Oops! Error: ${res.status}`);
    }
  }

// cards

  getInitialCards({ token }) {
    return fetch(`${this._url}/cards`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      method: 'GET'
    })
      .then(this._handleResponse)
  }

  createCard({token, name, link}) {
    return fetch(`${this._url}/cards`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      }),
      method: 'POST'
    })
      .then(this._handleResponse)
  }

  deleteCard({token, id}) {
    return fetch((`${this._url}/cards/${id}`), {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
      .then(this._handleResponse)
  }

  likeCard({token, cardId}) {
    return fetch((`${this._url}/cards/${cardId}/likes`), {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'PUT'
    })
    .then(this._handleResponse)
  }

  dislikeCard({token, cardId}) {
    return fetch((`${this._url}/cards/${cardId}/likes`), {
      headers: {
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
    .then(this._handleResponse)
  }

// user info

  getUserInfo ({token})  {
    return fetch(`${this._url}/users/me`, {
      headers: {
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
    .then(this._handleResponse)
  }

  setUserInfo ({name, bio, token}) {
    return fetch(`${this._url}/users/me`, {
        headers: {
          'Accept': 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          about: bio
        }),
        method: 'PATCH'
      }
    )
    .then(this._handleResponse)
  }

  setAvatar({avatar, token}) {
    return fetch((`${this._url}/users/me/avatar`), {
      headers: {
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({avatar}),
      method: 'PATCH'
    })
    .then(this._handleResponse)
  }

  signUp({ email, password }) {
    return fetch(`${this._url}/signup`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
      .then(this._handleResponse)
  }

  signIn({ email, password }) {
    return fetch(`${this._url}/signin`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
      .then(this._handleResponse)
  }
}

export const api = new Api(identity);
