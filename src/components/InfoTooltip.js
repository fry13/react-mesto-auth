import React from 'react';
import PopupWithForm from './PopupWithForm';

function InfoTooltip ({ isOpen, onClose, text, pic, formClassNameMod }) {
  return (
    <PopupWithForm
      name="tooltip"
      isOpen={isOpen}
      onClose={onClose}
      formClassNameMod={formClassNameMod}
    >
      <div className={`popup__tooltip-${pic}`} />
      <p className="popup__tooltip-text">
        {text}
      </p>
    </PopupWithForm>
  )
}

export default InfoTooltip;
