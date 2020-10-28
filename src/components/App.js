import React from 'react';
import { Route, Switch, withRouter, useHistory } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import DeleteCardPopup from './DeleteCardPopup';
import Registration from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import InfoTooltip from "./InfoTooltip";
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import {api} from "../utils/api";
import defaultAvatar from '../images/userpic.png';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState({isOpen: false, text: 'test', pic: 'ok'});
  const [selectedCard, setSelectedCard] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({name: 'Имя', about: 'Информация', avatar: defaultAvatar});
  //const [currentUser, setCurrentUser] = React.useState({});
  const [email, setEmail] = React.useState('');
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const history = useHistory();

  React.useEffect(() => {checkToken()
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo({ token: localStorage.token }), api.getInitialCards({ token: localStorage.token })])
        .then(([{ data: user }, { data: cards }]) => {
          setCurrentUser(user)
          setCards(cards.reverse())
        })
        .catch(handleError)
    }
  }, [loggedIn]);

  function checkToken () {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      api.getUserInfo({token})
        .then((res) => {
          if (res.data) {
            setLoggedIn(true);
            setEmail(res.data.email);
            history.push('/');
          } else {
            localStorage.removeItem('token')
            setLoggedIn(false)
            setCurrentUser({})
            setEmail('')
          }
        })
    }
  }

  function handleLogout () {
    localStorage.removeItem('token')
    setLoggedIn(false)
    setCurrentUser({})
    setEmail('')
  }

  function handleLogin ({ email, password }) {
    api.signIn({ email, password })
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token)
          setLoggedIn(true)
          checkToken()
        }
      })
      .catch((err) => {
        console.error(err);
        setIsInfoTooltipPopupOpen({isOpen: true, text: 'Что-то пошло не так! Попробуйте ещё раз', pic: 'error'})
      })
  }

  function handleRegister ({ email, password }) {
    api.signUp({ email, password })
      .then((res) => {
        if (res.data) {
          setIsInfoTooltipPopupOpen({isOpen: true, text: 'Вы успешно зарегистрировались!', pic: 'ok'});
          history.push('/sign-in');
        }
      })
      .catch((err) => {
        console.error(err);
        setIsInfoTooltipPopupOpen({isOpen: true, text: 'Что-то пошло не так! Попробуйте ещё раз', pic: 'error'})
      })
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }
  function handleCardDeleteClick(card) {
    setSelectedCard(card);
    setIsDeleteCardPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item === currentUser._id);

    function handleResponseLike({data: newCard}) {
      const newCards = cards.map((item) => item._id === card._id ? newCard : item);
      setCards(newCards);
    }

    if (isLiked) {
      api.dislikeCard({cardId: card._id, token: localStorage.token})
        .then(handleResponseLike)
        .catch(handleError)
    } else {
      api.likeCard({cardId: card._id, token: localStorage.token})
        .then(handleResponseLike)
        .catch(handleError)
    }
  }

  function handleCardDelete(card) {
    api.deleteCard({id: card._id, token: localStorage.token})
      .then(()=>{
        const newCards = cards.filter((item)=>{
          return item !== card
        });
        setCards(newCards);
        setSelectedCard('');
        closeAllPopups();
      })
      .catch(handleError)
  }

  function handleUpdateUser({name, about}) {
    api.setUserInfo({name, bio: about, token: localStorage.token})
      .then(()=>{
        setCurrentUser({...currentUser, name, about});
        closeAllPopups();
      })
      .catch(handleError)
  }

  function handleUpdateAvatar({avatar}) {
    api.setAvatar({avatar, token: localStorage.token})
      .then(()=>{
        setCurrentUser({...currentUser, avatar});
        closeAllPopups();
      })
      .catch(handleError)
  }

  function handleAddPlaceSubmit({name, link}) {
    api.createCard({name, link, token: localStorage.token})
      .then(({ data: newCard })=>{
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(handleError)
  }

  function handleError(error) {
    console.error(error);
    //return Promise.reject(error);
  }

  function closeAllPopups () {
    setIsEditAvatarPopupOpen(false);
    document.avatarForm.reset();
    setIsEditProfilePopupOpen(false);
    document.bioForm.reset();
    setIsAddPlacePopupOpen(false);
    document.cardForm.reset();
    setIsDeleteCardPopupOpen(false);
    setImagePopupOpen(false);
    setIsInfoTooltipPopupOpen({isOpen: false, text: '', pic: ''});
    setTimeout(function () {setSelectedCard('')}, 200);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className="page">

          {/*BIOGRAPHY POPUP*/}

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          {/*CARD POPUP*/}

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

          {/*CHANGE AVATAR POPUP*/}

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          {/*DELETE CARD POPUP*/}

          <DeleteCardPopup
            name="delete"
            isOpen={isDeleteCardPopupOpen}
            onClose={closeAllPopups}
            onDelete={handleCardDelete}
            selectedCard={selectedCard}
          />

          {/*PHOTO POPUP*/}

          <ImagePopup
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
            selectedCard={selectedCard}
          />

          {/*TOOLTIP*/}

          <InfoTooltip
            text={isInfoTooltipPopupOpen.text}
            pic={isInfoTooltipPopupOpen.pic}
            isOpen={isInfoTooltipPopupOpen.isOpen}
            onClose={closeAllPopups}
            formClassNameMod="popup__form_type_one-input"
          />

          {/*HEADER*/}

          <Header
            email={email}
            onLogout={handleLogout}
            isLoggedIn={loggedIn}
            history={history}
          />

          <Switch>
            <Route path="/sign-in" exact>
              <Login onLogin={handleLogin} />
            </Route>

            <Route path="/sign-up" exact>
              <Registration onRegistration={handleRegister} />
            </Route>

          {/*PROFILE and ELEMENTS*/}

            <ProtectedRoute
              component={Main}
              loggedIn={loggedIn}
              cards={cards}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDeleteClick}
            />
          </Switch>
          {/*FOOTER*/}

          <Footer />
        </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
