import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const AvatarLinkRef = React.useRef()

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: AvatarLinkRef.current.value
    });
  }

  return(
    <PopupWithForm
      name="avatarForm"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      formClassNameMod="popup__form_type_one-input"
    >
      <fieldset className="popup__input-container">
        <h2 className="popup__title">Обновить аватар</h2>
        <input
          name="avatar"
          ref={AvatarLinkRef}
          id="avatar-input"
          type="url"
          placeholder="Ссылка на картинку"
          required
          className="popup__input popup__input_link"
        />
        <span id="avatar-input-error" className="popup__error"/>
        <button type="submit" className="popup__save">Сохранить</button>
      </fieldset>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
